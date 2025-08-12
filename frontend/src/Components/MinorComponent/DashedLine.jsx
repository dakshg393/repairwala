const DashedLine = ({children}) => {
    return (
        <div class="flex items-center my-4 w-full">
            <div class="flex-grow border-t border-dotted border-black "></div>
            <span class="mx-3 text-gray-500">{children}</span>
            <div class="flex-grow border-t border-dotted  border-black"></div>
        </div>

    )
}

export default DashedLine