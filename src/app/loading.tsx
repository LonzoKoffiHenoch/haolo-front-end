export default function Loading() {
    return (
        <div className={"bg-red-500 h-screen w-full flex items-center justify-center z-50"}>
            <div className="lds-facebook ">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
