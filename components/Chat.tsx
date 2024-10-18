import { MessageSquareText } from "lucide-react";
import Link from "next/link";
import React from "react";

const Chat = () => {
    return (
        <Link href="/whatsapp.com">
            <div className="w-14 h-14 rounded-full fixed bottom-20 right-14 bg-primary shadow-md grid place-items-center">
                <MessageSquareText className="text-white" />
            </div>
        </Link>
    );
};

export default Chat;
