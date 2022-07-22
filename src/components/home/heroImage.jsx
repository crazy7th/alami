import { SuperGraph } from './superGraph';
import {
    Hero
} from '../../constants/data';

export const HeroImage = () => {
    return (
        <div
            id="heroImage"
            className={`bg-[url('../public/img/8LxEvb4kU-unsplash.jpg')] bg-cover bg-center md:bg-top text-white relative lg:h-screen flex flex-col`}
        >
            <div className="h-full w-full bg-black/60">
                <div className="container mx-auto text-center p-4 pt-20 mb-24">
                    <p className="dancing-text text-2xl md:text-3xl">
                        {Hero.tagline}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold lg:w-2/3 mx-auto my-5">
                        {Hero.headline}
                    </h1>
                    <p className="md:w-3/5 lg:w-2/5 mx-auto my-10">
                        {Hero.description}
                    </p>
                    <div>
                        <a
                            href="#"
                            className="inline-block bg-green-500 border-2 border-green-500 text-white rounded-full font-bold px-8 py-3 hover:bg-white hover:text-green-500"
                        >
                            {Hero.cta} ›
                        </a>
                    </div>
                </div>
            </div>
            <SuperGraph />
        </div>
    );
};
