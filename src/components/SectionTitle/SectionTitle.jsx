

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12 text-center my-8 text-white">
            <p className="text-center mt-2 ">---{subHeading}---</p>
            <h3 className="text-center text-4xl uppercase border-y-2 py-4 border-orange-400">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
