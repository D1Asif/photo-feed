import PhotoDetails from '@/components/PhotoDetails'
import React from 'react'

export default function PhotoDetailsPage({ params: { id, lang } }) {

    return (
        <PhotoDetails id={id} lang={lang} />
    )
}
