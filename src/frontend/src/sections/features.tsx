import Feature from "../components/feature";

export default function FeaturesSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-accentLight/10 w-full py-16 px-8">
            <Feature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accentLight mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
                title="השוואת מוצרים"
                description="השווה בין מגוון רחב של מוצרי קנאביס רפואי לפי סוג, ריכוז וצורת צריכה"
            />
            <Feature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accentLight mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                title="ביקורות משתמשים"
                description="קרא חוות דעת אמיתיות ממשתמשים אחרים לגבי יעילות ואיכות המוצרים"
            />
            <Feature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accentLight mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="מחירים הוגנים"
                description="מצא את המחירים הזולים ביותר עבור מוצרי קנאביס רפואי איכותיים"
            />
        </div>
    );
}
