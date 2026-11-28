function SectionIntro({title, subTitle}) {
    return(
        <div className="text-2xl  flex flex-col bg-amber-200 rounded">
            <h2 className="text-blue-500 font-bold text-center">{title}</h2>
            <p className="text-red-300">{subTitle}</p>
        </div>
    )
}

export default SectionIntro;