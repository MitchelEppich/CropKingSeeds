const ShippingMethod = props => {
    return (
        <div className="w-full mt-12">
            <div className="w-full inline-flex">
                <div className="p-2">
                    <div className="inline-flex items-center flex">
                        <input type="checkbox" className="checkbox"/>
                        <h2 className="font-extrabold text-black ml-2">Regular Shipping</h2>
                        <span className="text-3xl text-grey-light ml-10">$10</span>
                    </div>                    
                    <p className="mt-2 leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                    
                </div>
            </div>
            <div className="w-full inline-flex mt-6">
                <div className="p-2">
                    <div className="inline-flex items-center flex">
                        <input type="checkbox" className="checkbox"/>
                        <h2 className="font-extrabold text-black ml-2">Express Shipping</h2>
                        <span className="text-3xl text-grey-light ml-10">$32</span>
                    </div>                    
                    <p className="mt-2 leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                    
                </div>
            </div>
        </div>
    )
}

export default ShippingMethod