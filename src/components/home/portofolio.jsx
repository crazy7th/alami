export const Portofolio = () => {
    return (
        <div
            id="portofolio"
            className="relative h-screen flex flex-col md:overflow-hidden"
        >
            <div className="container mx-auto text-center p-4 md:pt-20">
                <p>
                    Catering service in New York
                </p>
                <h2 className="text-4xl font-bold md:w-2/3 mx-auto my-5">
                    We specialize in corporate and private servers
                </h2>
                <p className="md:w-4/5 mx-auto mb-3">
                    With 20 years of experience, we promise you the freshest, local ingredients,
                    hand crafted cooking sprinkled with our unique whimsical elegance and exceptional service.
                </p>
            </div>
            <div className="md:flex flex-1 h-full">
                <div className="md:w-72 bg-[#404040] flex items-center justify-center">
                    <h3 className="p-4 text-3xl font-bold text-white">
                        My Portofolio
                    </h3>
                </div>
                <div className="flex-1 md:flex items-center bg-[#302729] text-white p-4 overflow-y-scroll">
                    <div className="md:mx-8">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="md:w-56 bg-[#362A2E] rounded-lg p-4">
                                <div className="w-12 h-12 bg-[#A8858F] rounded-md mb-5" />
                                <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                    Design
                                </h4>
                                <p className="text-xs">
                                    Fullstack all around designer that may or may not include a guide
                                    for specific creative people
                                </p>
                            </div>
                            <div className="md:w-56 bg-[#362A2E] rounded-lg p-4">
                                <div className="w-12 h-12 bg-[#A8858F] rounded-md mb-5" />
                                <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                    Develop
                                </h4>
                                <p className="text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nulla luctus mattis justo, scelerisque eleifend ipsum pulvinar auctor.
                                </p>
                            </div>
                            <div className="md:w-56 bg-[#362A2E] rounded-lg p-4">
                                <div className="w-12 h-12 bg-[#A8858F] rounded-md mb-5" />
                                <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                    Write
                                </h4>
                                <p className="text-xs">
                                    Donec tincidunt tempus diam at fringilla. Nulla facilisi.
                                    Vestibulum non sollicitudin turpis
                                </p>
                            </div>
                            <div className="md:w-56 bg-[#362A2E] rounded-lg p-4">
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
                    <div className="flex-1 p-4 md:p-8 mt-10 md:mt-0">
                        <div>
                            <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                Service
                            </h4>
                            <div className="mt-6 space-y-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus mattis justo, scelerisque eleifend ipsum pulvinar auctor.</p>
                                <p>Donec tincidunt tempus diam at fringilla. Nulla facilisi. Vestibulum non sollicitudin turpis, in semper ante.</p>
                                <p>Nunc accumsan nisi arcu, sed sodales velit fermentum eu. Aliquam interdum sollicitudin sapien sed ultricies. Cras sit amet volutpat mi. Duis egestas libero ac ex semper, a porttitor augue lacinia.</p>
                            </div>
                            <div className="mt-10 md:flex space-y-4 md:space-x-4 md:space-y-0">
                                <a
                                    href="#"
                                    className="flex md:inline-flex rounded-full px-4 py-2 border-2 border-[#F57D85] font-medium hover:bg-[#F57D85] hover:text-white justify-center"
                                >
                                    Download CV
                            </a>
                                <a
                                    href="#"
                                    className="flex md:inline-flex rounded-full px-4 py-2 border-2 border-[#F57D85] font-medium hover:bg-[#F57D85] hover:text-white justify-center"
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
