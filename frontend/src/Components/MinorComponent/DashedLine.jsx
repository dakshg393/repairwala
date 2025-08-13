const DashedLine = ({children}) => {
    return (
        <div className="flex items-center my-4 w-full">
            <div className="flex-grow border-t border-dotted border-black "></div>
            <span className="mx-3 text-gray-500">{children}</span>
            <div className="flex-grow border-t border-dotted  border-black"></div>
        </div>

    )
}

export default DashedLine