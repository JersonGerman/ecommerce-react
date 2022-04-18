
const Gallery = ({images=[]}) =>{

    return(
        <div className="mb-5 overflow-hidden">
            {/* Galery */}
            <div className="mb-10 relative">
                <div className="absolute flex bottom-0 items-center top-0 left-0">
                    <button className="bg-red-500 rounded-full text-white text-sm h-10 w-10 leading-normal z-10">
                        <i className="bi bi-chevron-left"></i>
                    </button>    
                </div>  
                <div className="absolute flex bottom-0 items-center top-0 right-0">
                    <button className="bg-red-500 rounded-full text-white text-sm h-10 w-10 leading-normal z-10">
                        <i className="bi bi-chevron-right"></i>    
                    </button>    
                </div>  
                <ul className="-translate-x-3/3 w-[300%] flex h-72 transition-all duration-500">
                    {
                        images.map(image => (
                            <li className="px-12 w-full" key={image}>
                                <img className="h-full object-contain w-full" src={image} alt="" />
                            </li>
                        ))
                    }
                    
                    {/* <li className="px-12 w-full">
                        <img className="h-full object-contain w-full" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-e1a36.appspot.com/o/img%2Fproducts%2F18-1-r.jpg?alt=media&amp;token=e7247b50-390b-428b-9e46-214f64a15d8e" alt=""/>
                    </li>
                    <li className="px-12 w-full">
                        <img className="h-full object-contain w-full" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-e1a36.appspot.com/o/img%2Fproducts%2F18-1-p.jpg?alt=media&amp;token=5007ec9a-2299-459f-923a-fe3502a9b6a3" alt=""/>
                    </li> */}
                </ul>  
            </div>
            {/* Previus images */}
            <ul className="flex justify-center">
                {
                    images.map((image,i) => (
                        <li className={`h-20 w-20 mx-2.5 p-1 border-2 rounded-md ${i===0&&'border-red-500'}`} key={image}>
                            <img className="cursor-pointer h-full object-contain" src={image} alt="" />
                        </li>
                    ))
                }
                
                {/* <li className="h-20 w-20 mx-2.5 p-1">
                    <img className="cursor-pointer h-full object-contain" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-e1a36.appspot.com/o/img%2Fproducts%2F18-1-r.jpg?alt=media&amp;token=e7247b50-390b-428b-9e46-214f64a15d8e" alt="" />
                </li>
                <li className="h-20 w-20 mx-2.5 p-1">
                    <img className="cursor-pointer h-full object-contain" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-e1a36.appspot.com/o/img%2Fproducts%2F18-1-p.jpg?alt=media&amp;token=5007ec9a-2299-459f-923a-fe3502a9b6a3" alt="" />
                </li> */}
            </ul>
        </div>
    )
}
export default Gallery;