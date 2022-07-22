export function FloatingMenu(props) {
    return (
        <div 
            className={props.showMenu==1? 'fixed top-[228px] z-20 bg-gray-100 w-full border-t border-gray-100' : 'hidden md:flex fixed z-20 bg-white rounded-md shadow right-0 top-1/2 -translate-y-1/2'}
        >
            <ul className={props.showMenu==1? 'flex' : ''}>
                <li className="flex-1 md:border-b md:border-gray-100">
                    <a href="#" className="p-4 flex hover:text-green-500">
                        <svg className="stroke-black hover:stroke-green-500" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                    </a>
                </li>
                <li className="flex-1 md:border-b md:border-gray-100">
                    <a href="#" className="p-4 flex hover:text-green-500">
                        <svg className="fill-black hover:fill-green-500" width="24px" height="24px" viewBox="0 0 79.694 79.694" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M68.013,11.67C60.488,4.144,50.482,0,39.838,0s-20.65,4.145-28.176,11.671c-15.537,15.536-15.537,40.815,0,56.351
                            c7.525,7.526,17.532,11.672,28.175,11.672c10.645,0,20.65-4.146,28.176-11.673c7.526-7.524,11.672-17.53,11.672-28.175
                            C79.683,29.202,75.538,19.196,68.013,11.67z M65.791,61.558l-11.308-11.31c4.414-6.209,4.414-14.596,0-20.807l11.31-11.31
                            C76.282,30.656,76.282,49.035,65.791,61.558z M27.854,39.846c0-3.201,1.247-6.21,3.51-8.473c2.264-2.263,5.273-3.51,8.474-3.51
                            s6.21,1.247,8.474,3.51c4.672,4.672,4.672,12.274,0,16.948c-2.264,2.264-5.271,3.51-8.473,3.51c-3.201,0-6.21-1.246-8.474-3.51
                            C29.1,46.056,27.854,43.046,27.854,39.846z M61.553,13.888l-11.31,11.309c-3.021-2.156-6.619-3.334-10.406-3.334
                            c-3.786,0-7.385,1.178-10.406,3.334L18.123,13.889c6.08-5.104,13.682-7.89,21.715-7.89S55.474,8.785,61.553,13.888z M13.882,18.134
                            L25.188,29.44c-2.156,3.021-3.334,6.619-3.334,10.406c0,3.788,1.178,7.385,3.334,10.407L13.882,61.559
                            C3.391,49.035,3.391,30.657,13.882,18.134z M18.122,65.803l11.309-11.309c3.021,2.155,6.62,3.334,10.407,3.334
                            s7.386-1.179,10.405-3.334l11.31,11.309c-6.079,5.104-13.683,7.891-21.716,7.891C31.803,73.694,24.201,70.909,18.122,65.803z"/>
                        </svg>
                    </a>
                </li>
                <li className="flex-1 md:border-b md:border-gray-100">
                    <a href="#" className="p-4 flex hover:text-green-500">
                        <svg className="fill-black hover:fill-green-500" width="24px" height="24px" viewBox="0 0 503.641 503.641" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M460.494,106.408c-0.426-2.505-1.788-4.448-3.809-5.571L358.836,2.988c-1.124-2.021-3.067-3.383-5.571-3.809
                            c-0.714-0.16-1.45-0.211-2.199-0.146H116.508c-14.269,0-25.18,10.911-25.18,25.18v25.18h-25.18
                            c-14.269,0-25.18,10.911-25.18,25.18V477.46c0,14.269,10.911,25.18,25.18,25.18h318.951c14.269,0,25.18-10.911,25.18-25.18
                            v-25.18h25.18c14.269,0,25.18-10.911,25.18-25.18V108.608C460.705,107.858,460.654,107.122,460.494,106.408z M432.102,99.755
                            h-63.79c-5.036,0-8.393-3.357-8.393-8.393v-63.79L432.102,99.755z M393.492,477.46c0,5.036-3.357,8.393-8.393,8.393H66.147
                            c-5.036,0-8.393-3.357-8.393-8.393V74.575c0-4.197,3.357-8.393,8.393-8.393h24.341h0.839V427.1
                            c0,14.269,10.911,25.18,25.18,25.18h276.984V477.46z M443.852,427.1c0,5.036-3.357,8.393-8.393,8.393h-34.413H116.508
                            c-5.036,0-8.393-3.357-8.393-8.393V59.467V24.214c0-4.197,3.357-8.393,8.393-8.393h226.623v75.541
                            c0,14.269,10.911,25.18,25.18,25.18h75.541V427.1z"/>
                            <path d="M158.475,116.542h151.082c5.036,0,8.393-3.357,8.393-8.393s-3.357-8.393-8.393-8.393H158.475
                            c-5.036,0-8.393,3.357-8.393,8.393S153.439,116.542,158.475,116.542z"/>
                            <path d="M150.082,158.509c0,5.036,3.357,8.393,8.393,8.393h251.803c5.036,0,8.393-3.357,8.393-8.393s-3.357-8.393-8.393-8.393
                            H158.475C153.439,150.116,150.082,153.473,150.082,158.509z"/>
                            <path d="M410.279,200.477H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803
                            c5.036,0,8.393-3.357,8.393-8.393S415.315,200.477,410.279,200.477z"/>
                            <path d="M410.279,250.837H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803
                            c5.036,0,8.393-3.357,8.393-8.393S415.315,250.837,410.279,250.837z"/>
                            <path d="M410.279,301.198H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803
                            c5.036,0,8.393-3.357,8.393-8.393S415.315,301.198,410.279,301.198z"/>
                            <path d="M410.279,351.559H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803
                            c5.036,0,8.393-3.357,8.393-8.393S415.315,351.559,410.279,351.559z"/>
                        </svg>
                    </a>
                </li>
                <li className="flex-1 md:border-b md:border-gray-100">
                    <a href="#" className="p-4 flex hover:text-green-500">
                        <svg className="fill-black hover:fill-green-500" width="24px" height="24px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 
                            19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 
                            10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 
                            20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z"/>
                        </svg>
                    </a>
                </li>
                <li className="flex-1 md:border-b md:border-gray-100">
                    <a href="#" className="p-4 flex hover:text-green-500">
                        <svg className="fill-black hover:fill-green-500" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 8a6 6 0 1 1 12 0A6 6 0 0 1 4 8zm12.828-4.243a1 1 0 0 1 1.415 0 6 6 0 0 1 0 8.486 
                            1 1 0 1 1-1.415-1.415 4 4 0 0 0 0-5.656 1 1 0 0 1 0-1.415zm.702 13a1 1 0 0 1 1.212-.727c1.328.332 2.169 1.18 2.652 2.148.468.935.606 
                            1.98.606 2.822a1 1 0 1 1-2 0c0-.657-.112-1.363-.394-1.928-.267-.533-.677-.934-1.349-1.102a1 1 0 0 1-.727-1.212zM6.5 18C5.24 18 4 19.213 4 21a1 
                            1 0 1 1-2 0c0-2.632 1.893-5 4.5-5h7c2.607 0 4.5 2.368 4.5 5a1 1 0 1 1-2 0c0-1.787-1.24-3-2.5-3h-7z"/>
                        </svg>
                    </a>
                </li>
                <li className="flex-1">
                    <a href="#" className="p-4 flex hover:text-green-500">
                        <svg className="fill-black hover:fill-green-500" width="24px" height="24px" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.68,13l-0.833-5h-2.99C7.411,6.28,5.859,5,4,5C1.794,5,0,6.794,0,9s1.794,4,4,4c1.859,0,3.411-1.28,3.858-3h1.294l0.5,3
                            H9.614l5.171,26.016c-2.465,0.188-4.518,2.086-4.76,4.474c-0.142,1.405,0.32,2.812,1.268,3.858C12.242,48.397,13.594,49,15,49h2
                            c0,3.309,2.691,6,6,6s6-2.691,6-6h11c0,3.309,2.691,6,6,6s6-2.691,6-6h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4.35
                            c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4H15
                            c-0.842,0-1.652-0.362-2.224-0.993c-0.577-0.639-0.848-1.461-0.761-2.316c0.152-1.509,1.546-2.69,3.173-2.69h0.791
                            c0.014,0,0.025,0,0.039,0h38.994C57.763,41,60,38.763,60,36.013V13H11.68z M4,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2
                            S5.103,11,4,11z M46,45c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S43.794,45,46,45z M23,45c2.206,0,4,1.794,4,4s-1.794,4-4,4
                            s-4-1.794-4-4S20.794,45,23,45z M58,36.013C58,37.66,56.66,39,55.013,39H16.821l-4.77-24H58V36.013z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

