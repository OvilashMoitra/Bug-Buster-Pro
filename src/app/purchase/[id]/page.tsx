"use client"

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PurchaseCard from "@/components/ui/Purchase/PurchaseCard";

const page = ({ params }: { params: { id: string } }) => {
    return (
        <div className='bg-slate-900'>
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
                <Navbar />
                <PurchaseCard id={params.id} />
                <Footer />
            </div>
        </div>
    );
};

export default page;