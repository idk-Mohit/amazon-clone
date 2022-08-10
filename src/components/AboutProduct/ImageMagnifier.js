
import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import styled from 'styled-components';

const ImageMagnifier = ({ image }) => {
    return (
        <Container className='flex-column'>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'ProductImage',
                    isFluidWidth: true,
                    src: image,
                },
                largeImage: {
                    src: image,
                    width: 1550,
                    height: 1800
                }
            }}
                imageClassName='smallImage'
                enlargedImageClassName='largeImage'
                enlargedImageContainerClassName='largeImageContainer'
                className='magnifier' />
            <span className='desktopView'>Hover to zoom in</span>
        </Container>
    )
}

export default ImageMagnifier

const Container = styled.div`
    position: sticky;
    display: flex;
    top:70px;
    align-items: center;
    justify-content: center;
    .magnifier{
        min-height: 20rem;
        max-height: 30rem;
        max-width:28rem;

        @media (max-width:1024px) {
            max-width: 20rem;
            min-height: auto;
        }
        @media (max-width:900px){
            pointer-events: none;
        }
        @media (max-width:768px) {
            max-width: 100%;
            margin-top: 60px;
        }
    }
    .smallImage{
        max-height: inherit;
        max-width:inherit;
        margin:auto;
        width: auto !important;
        padding: 1rem;
    }
    .largeImageContainer{
        min-width: 40rem !important;
        min-height: 50rem !important;
        background: white !important;

        @media (max-width:768px) {
            width: 92vw !important;
        }
    }
    @media (max-width:900px) {
        .desktopView{
            display:none;
        }
    }
`