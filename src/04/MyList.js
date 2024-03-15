export default function MyList({title,img,content}) {
    return (
        <div className="flex w-full border rounded hover:bg-gray-200">
            <div className="w-1/4 max-w-40">
                <img className="h-full" src={img} alt={title} />
            </div>
            <div className="p-5 w-3/4">
                <h1 className="font-bold text-2xl text-gray-800">
                    {title}
                </h1>
                <p className="w-full text-gray-800">
                    {content}
                </p>
                <p className="w-full font-bold flex justify-end mt-3">
                <span>🧡</span>
                <span className="mx-2">좋아요</span>
                <span>0</span>
                </p>
            </div>
        </div>
    )
}
