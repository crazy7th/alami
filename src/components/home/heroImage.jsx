import { SuperGraph } from './superGraph';

export const HeroImage = () => {
    return (
        <div className="relative text-white min-h-screen kt-hero-img">
            <div className="absolute h-full w-full bg-black/60">
                <div className="container mx-auto text-center p-4 md:pt-24">
                    <p>
                        Catering should be an experience
                    </p>
                    <h1 className="text-6xl font-bold md:w-2/3 mx-auto my-5">
                        We use only the finest and freshnest ingredients
                    </h1>
                    <p className="md:w-2/5 mx-auto my-10">
                        At sway catering we know that food is an important of life.
                        If the meal is not perfect, your event cannot be perfect.
                    </p>
                    <div>
                        <a
                            href="#"
                            className="inline-block bg-green-500 border-2 border-green-500 text-white rounded-full font-bold px-8 py-3 hover:bg-white hover:text-green-500"
                        >
                            Request a Quote ›
                        </a>
                    </div>
                </div>
            </div>
            <SuperGraph />
        </div>
    );
};
