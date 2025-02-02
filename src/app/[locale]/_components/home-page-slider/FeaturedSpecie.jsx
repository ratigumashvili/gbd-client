"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const featuredOrders = [
    {
        id: 5,
        name: "Natia Kopaliani",
        researchGate: "https://www.researchgate.net/profile/Natia_Kopaliani",
        text: `Professor of Ilia State University, Head of the Program for Ecology and Conservation of Large Mammals`,
        photo: "https://biodiversity.iliauni.edu.ge/images/team/Natia_Kopaliani.png",
    },
    {
        id: 6,
        name: "George Japoshvili",
        researchGate: "https://www.researchgate.net/profile/George_Japoshvili",
        text: `Director of Institute of Entomology, Professor of Agraricultural University of Georgia`,
        photo: "https://biodiversity.iliauni.edu.ge/images/team/George_Japoshvili.png",
    },
    {
        id: 7,
        name: "Maka Murvanidze",
        researchGate: "https://www.researchgate.net/profile/Maka_Murvanidze",
        text: `Associate Professor of Agraricultural University of Georgia`,
        photo: "https://biodiversity.iliauni.edu.ge/images/team/Maka_Murvanidze.png",
    },
];

export default function FeaturedSpecie() {
    const [currentFeaturedOrder, setFeaturedOrders] = useState(null);

    useEffect(() => {
        const startDate = new Date("2024-01-01");
        const today = new Date();

        const dayDifference = Math.floor(
            (today - startDate) / (1000 * 60 * 60 * 24)
        );

        // ✅ Loop through contributors using modulo
        const index = dayDifference % featuredOrders.length;

        setFeaturedOrders(featuredOrders[index]);
    }, []);

    if (!currentFeaturedOrder) return <p>Loading contributor...</p>;

    return (
        // <div className="w-full h-full mx-auto bg-white shadow-md rounded-lg p-4 text-center border">
        //     <img
        //         src={currentFeaturedOrder.photo}
        //         alt={currentFeaturedOrder.name}
        //         className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-teal-500"
        //     />
        //     <h2 className="text-xl font-semibold mt-4">
        //         {currentFeaturedOrder.name}
        //     </h2>
        //     <p className="text-gray-600 mt-2">{currentFeaturedOrder.text}</p>
        //     <a
        //         href={currentFeaturedOrder.researchGate}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         className="inline-block mt-4 bg-teal-600 text-white py-1 px-4 rounded hover:bg-teal-700"
        //     >
        //         ResearchGate Profile
        //     </a>
        // </div>
        <div className="w-full h-full relative group">
            <Image
                src={"https://biodiversity.iliauni.edu.ge/DBImages/New/f2011041150.JPG"}
                fill
                alt="text"
                objectFit="cover"
                className="rounded-md overflow-hidden"
            />
            <div className={`
            h-24 
            w-full 
            rounded-b-md
            bg-teal-700 
            text-white
            absolute 
            bottom-0 
            left-0 
            flex 
            items-center 
            justify-center
            opacity-0 
            group-hover:opacity-90 
            transition
            `}>
                <h2 className="text-xl">
                    Specie of the day: Hyaena
                </h2>
            </div>
        </div>
    );
}
