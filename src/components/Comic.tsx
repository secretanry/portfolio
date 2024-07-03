import React, { useEffect, useState } from 'react';

interface ComicData {
    safe_title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
    day: string;
}

const Comic: React.FC = () => {
    const [comic, setComic] = useState<ComicData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiEndpoint = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent('m.gladyshev@innopolis.university')}`;
        fetch(apiEndpoint)
            .then(response => response.text())
            .then(data => {
                const comicId = data.trim();
                return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
            })
            .then(response => response.json())
            .then(setComic)
            .catch(error => {
                console.error('Error fetching the comic:', error);
                setError('Failed to load comic.');
            });
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!comic) {
        return <p>Loading...</p>;
    }

    const comicDate = new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day));

    return (
        <section id="comic">
            <h2>Comic</h2>
            <div id="comic-container" className="comic-container">
                <h3>{comic.safe_title}</h3>
                <img src={comic.img} alt={comic.alt} title={comic.alt} />
                <p>Published on: {comicDate.toLocaleDateString()}</p>
            </div>
        </section>
    );
};

export default Comic;
