export const Portofolio = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <div className="container mx-auto text-center p-4 md:pt-24">
                <p>
                    Catering service in New York
                </p>
                <h2 className="text-4xl font-bold md:w-2/3 mx-auto my-5">
                    We specialize in corporate and private servers
                </h2>
                <p className="md:w-4/5 mx-auto my-5">
                    With 20 years of experience, we promise you the freshest, local ingredients,
                    hand crafted cooking sprinkled with our unique whimsical elegance and exceptional service.
                </p>
            </div>
            <div className="md:flex flex-1 h-full">
                <div className="w-72 bg-[#404040] flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">
                        My Portofolio
                    </h3>
                </div>
                <div className="flex-1 flex items-center bg-[#302729] text-white p-4">
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="w-56 bg-[#362A2E] rounded-lg p-4">
                                <div className="w-12 h-12 bg-[#A8858F] rounded-md mb-5" />
                                <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                    Design
                                </h4>
                                <p className="text-xs">
                                    Fullstack all around designer that may or may not include a guide
                                    for specific creative people
                                </p>
                            </div>
                            <div className="w-56 bg-[#362A2E] rounded-lg p-4">
                                <div className="w-12 h-12 bg-[#A8858F] rounded-md mb-5" />
                                <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                    Develop
                                </h4>
                                <p className="text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nulla luctus mattis justo, scelerisque eleifend ipsum pulvinar auctor.
                                </p>
                            </div>
                            <div className="w-56 bg-[#362A2E] rounded-lg p-4">
                                <div className="w-12 h-12 bg-[#A8858F] rounded-md mb-5" />
                                <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                    Write
                                </h4>
                                <p className="text-xs">
                                    Donec tincidunt tempus diam at fringilla. Nulla facilisi.
                                    Vestibulum non sollicitudin turpis
                                </p>
                            </div>
                            <div className="w-56 bg-[#362A2E] rounded-lg p-4">
                                <div className="w-12 h-12 bg-[#A8858F] rounded-md mb-5" />
                                <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                    Promote
                                </h4>
                                <p className="text-xs">
                                    Nunc accumsan nisi arcu, sed sodales velit fermentum eu. Aliquam interdum sollicitudin sapien sed ultricies
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-8">
                        <div>
                            <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                Service
                            </h4>
                            <div className="mt-6 space-y-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus mattis justo, scelerisque eleifend ipsum pulvinar auctor.</p>
                                <p>Donec tincidunt tempus diam at fringilla. Nulla facilisi. Vestibulum non sollicitudin turpis, in semper ante.</p>
                                <p>Nunc accumsan nisi arcu, sed sodales velit fermentum eu. Aliquam interdum sollicitudin sapien sed ultricies. Cras sit amet volutpat mi. Duis egestas libero ac ex semper, a porttitor augue lacinia.</p>
                            </div>
                            <div className="mt-10 flex space-x-4">
                                <a
                                    href="#"
                                    className="inline-flex rounded-full px-4 py-2 border-2 border-[#F57D85] font-medium hover:bg-[#F57D85] hover:text-white"
                                >
                                    Download CV
                            </a>
                                <a
                                    href="#"
                                    className="inline-flex rounded-full px-4 py-2 border-2 border-[#F57D85] font-medium hover:bg-[#F57D85] hover:text-white"
                                >
                                    Check My Portofolio
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
