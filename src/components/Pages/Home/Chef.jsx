

const Chef = () => {
    return (
        <div className="max-w-6xl mx-auto py-5">
            <h3 className=" text-3xl text-center font-semibold py-5">Guys Who Serves You</h3>
            <div className="rounded-md grid md:grid-cols-3 lg:grid-cols-3  items-center justify-between gap-5 py-3">
                <div>
                    <img className=" w-[60%] h-[60%] mx-auto rounded-full bg-slate-300 p-3" src="https://i.postimg.cc/zDhy6TGH/New-Project-2023-10-21-T205341-261.png" alt="" />
                </div>
                <div>
                    <img className=" w-[60%] h-[60%] mx-auto rounded-full bg-slate-300 p-3" src="https://i.postimg.cc/vHLcHM9Q/New-Project-2023-10-21-T205436-748.png" alt="" />
                </div>
                <div>
                    <img className=" mx-auto h-[60%] w-[60%] rounded-full bg-slate-300 p-3" src="https://i.postimg.cc/VLcJ85JG/New-Project-2023-10-21-T205459-684.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Chef;