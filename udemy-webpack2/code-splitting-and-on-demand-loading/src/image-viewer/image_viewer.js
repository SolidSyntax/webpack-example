import small from '../../assets/small.jpeg';
import './image_viewer.css'

export default () => {
    const smallImage = document.createElement('img');
    smallImage.src = small;
    document.body.appendChild(smallImage);
}


