import sum from './math';
import './image-viewer/image_viewer'; // We are not importing anything that has to be used.
                                      // The code has to be imported so that it will be called and run.

const total = sum(5, 2);
console.log(total);