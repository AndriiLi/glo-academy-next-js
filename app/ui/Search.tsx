'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Search() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Инициализация состояния из URL
    const [search, setSearch] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const searchParam = params.get('search');

        if (searchParam) {
            setSearch(searchParam);
        } else {
            setSearch('');
        }

    }, []);

    const updateFilter = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }

        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="search">
            <div className="search-wrapper">
                <input
                    className="search-wrapper_input"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') updateFilter(search);
                    }}
                    placeholder="Поиск..."
                />
            </div>
            <div className="search-btn">
                <button onClick={() => updateFilter(search)}></button>
            </div>
        </div>
    )
}
