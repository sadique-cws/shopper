import StaticCard from "./_components/static-card";

export default function page(){
    return (
        <div className="grid grid-cols-4 gap-5">
            <StaticCard bg="indigo" title="Total Products" no={0}/>
            <StaticCard bg="pink" title="Total Orders" no={0}/>
            <StaticCard bg="yellow" title="Total Categories" no={0}/>
            <StaticCard bg="light-green" title="Total Delivered" no={0}/>
        </div>
    )
}