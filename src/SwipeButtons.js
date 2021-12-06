import React from 'react';
import './SwipeButton.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function SwipeButton() {
    return (
        <div className="swipeButtons">
            {/* ReplayIcon */}
            <ReplayIcon />
            {/* CloseIcon */}
            <CloseIcon />
            {/* StarRateIcon */}
            <StarRateIcon />
            {/* FavoriteIcon */}
            <FavoriteIcon />
            {/* FlashOnIcon */}
            <FlashOnIcon />

            
        </div>
    )
}

export default SwipeButton
