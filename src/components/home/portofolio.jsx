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
                    My Portofolio
                </div>
                <div className="flex-1 flex bg-[#302729] text-white">
                    <div className="md:w-7/12">
                        <div class="grid gap-4">
                            <div>01</div>
                            <div>02</div>
                            <div>03</div>
                            <div>04</div>
                        </div>
                    </div>
                    <div className="flex-1 p-8">
                        <h3 className="text-2xl font-bold text-[#F57D85]">Service</h3>
                        <div className="mt-8 space-y-6">
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
    );
};
