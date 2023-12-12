import { useMemo } from 'react';
import {
    useNavigate,
    useLocation,
    useParams,
} from 'react-router-dom';

export function useRouter<
    S extends object | null = any,
    P extends object | null = any,
    Q extends object | null = any,
>() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Return our custom router object
    // Memoize so that a new object is only returned if something changes
    return useMemo(() => {
        return {
            // For convenience add navigate(), pathname at top level
            navigate,
            pathname: location.pathname,
            // Merge params and parsed query string into a single "query" object
            // so that they can be used interchangeably.
            // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
            query: {
                ...Object.fromEntries(new URLSearchParams(location.search)), // Convert URLSearchParams to object
            } as Q,
            // Include location object so we have
            // access to extra React Router functionality if needed.
            location,
            state: location.state as S | undefined,
            params: params as P,
        };
    }, [params, location, navigate]);
}
