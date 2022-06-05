import { lazy, Suspense } from 'react';
// import HomePage from "components/HomePage/HomePage";
const HomePage = lazy(() => import('components/Views/HomePage'));

const NotFoundPage = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <HomePage />
            </Suspense>
        </div>
    )
};

export default NotFoundPage;