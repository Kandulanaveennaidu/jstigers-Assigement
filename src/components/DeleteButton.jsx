'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Alert } from '@/components/Alert';

import { MdDelete } from "react-icons/md";

import { deleteVendor } from '@/server_actions/vendor.actions';

const DeleteButton = ({ id }) => {

    const { refresh } = useRouter();

    const [isOpen, onOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const onDelete = async () => {
        setLoading(true);
        await deleteVendor(id);
        setLoading(false);
        onOpen(false);
        refresh();
    }

    return (
        <div>
            <MdDelete fontSize={20} cursor={'pointer'} color='#E53E3E' onClick={() => onOpen(true)} />
            <Alert isOpen={isOpen} onClose={() => onOpen(false)} onProceed={onDelete} isLoading={isLoading} />
        </div>
    )
}

export { DeleteButton }
