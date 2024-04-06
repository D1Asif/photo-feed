"use client"

import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
    const modalRef = useRef(null);

    const router = useRouter();

    useEffect(() => {
        if (!modalRef.current?.open) {
            modalRef.current?.showModal();
        }
    }, []);

    const onHide = () => {
        router.back();
    }

    return createPortal(
        <dialog 
            ref={modalRef}
            onClose={onHide}
            className="shadow-teal-700/20 shadow-lg  flex flex-col p-4 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100 px-8 pb-10"
        >
            <span
                onClick={onHide}
                className="flex justify-end cursor-pointer p-2 pb-3"
            >
                <Image 
                    src="/icons/xmark.svg" 
                    alt="Close" 
                    width={30}
                    height={30} 
                />
            </span>
            {children}
        </dialog>,
        document.getElementById("modal-root-content")
    )
}
