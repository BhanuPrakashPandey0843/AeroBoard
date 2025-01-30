import React from 'react';

// Sample data for the gallery
const images = [
    {
        src: 'https://th.bing.com/th/id/OIP.cBcqgYKWmy0pF2NOR1Z4WAHaFs?rs=1&pid=ImgDetMain', // Replace with your image URLs
        alt: 'Image 1',
        text: 'This image showcases the initial setup of the project environment.',
    },
    {
        src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/025/406/datas/gallery.jpg',
        alt: 'Image 2',
        text: 'Here we can see the main components of the application and their interactions.',
    },
    {
        src: 'https://www.rismedia.com/wp-content/uploads/2023/02/metaverse-iStock-1442519714.jpg',
        alt: 'Image 3',
        text: 'This image illustrates the database schema used in the project.',
    },
   
];

const ImageGallery = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Banner Section */}
            <div className="relative mb-10">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/000/701/690/original/abstract-polygonal-banner-background-vector.jpg" // Replace with your banner image URL
                    alt="Banner"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center shadow-md bg-black bg-opacity-50 p-4 rounded-lg">
                    Project Documentation
                </h1>
            </div>

            {/* Documentation Text */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4">Abstract</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                The increasing need for intuitive and accessible human-computer interaction
 has led to developing new input systems that exceed standard devices. This
 paper presents a new motion-to-action converter. It is designed as a software
 to enhance the interaction of users with intelligent wearable technologies. The
 general idea of this system is to enable users to input text and to perform
 control functions by making natural hand gestures. They can ”write in of air”
 and to navigate with a virtual keyboard and mouse. This design always
 eliminates the necessity for touch-based interaction and, therefore, gives a
 touch-free, smooth user experience. It becomes very useful in scenarios where
 traditional input devices become sawkward or not possible to use, for instance,
 for people with mobility impairments or disabilities.
 The primary objective of this work is to afford a gestural way in which virtual
 keyboards and mice can be controlled. The system simulates those of a
 conventional keyboard, mouse, and stylus by tracking hand movements in real
time, thus enabling users to interact with digital devices purely through air
based gestures. A discussion of the development and implementation of a
 virtual air canvas, a dynamic interface that allows users to draw or interact
 with graphical elements in the digital space using hand gestures. Hand gesture
 recognition and motion capture through MediaPipe and OpenCV allow for
 accurate tracking of the user’s movements, to provide for direct, real-time
 interaction and control.
 The paper introduces three important innovations in replacing conventional
 input devices: a gesture-controlled virtual mouse, a gesture-controlled virtual
 keyboard, and the air canvas. The system captures hand movement and
 translates this into cursor movement, executing standard mouse functions
 with the help of several hand gestures. Although promising as a viable
 alternative to the traditional computer mouse, the system’s Current limita
 tions do not make it a full replacement. Especially for precision demanding
 tasks, it is still inferior to the other methods.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                This study introduces virtual keyboard technology, which allows alternative
 text input. The technology simulates a real physical keyboard and has it in a
 digital interface. The system detects hand gestures and thus allows users to
 interact with virtual keys without requiring a physical keyboard. Such gesture
 based input improves accessibility for people with mobility impairments and 
affords customizable layouts and Recognition features that adapt to the
 evolving needs of users. Consequences of this technology extend to include
 assistive devices, touchless environments, and physical keyboards where
 practicality is not possible-consider, for example, hospitals, virtual reality
 applica tions, or immersive computing environments.
 This study introduces virtual keyboard technology, which allows alternative
 text input. The technology simulates a real physical keyboard and has it in a
 digital interface. The system detects hand gestures and thus allows users to
 interact with virtual keys without requiring a physical keyboard. Such gesture
 based input improves accessibility for people with mobility impairments and
 affords customizable layouts and Recognition features that adapt to the
 evolving needs of users. Consequences of this technology extend to include
 assistive devices, touchless environments, and physical keyboards where
 practicality is not possible-consider, for example, hospitals, virtual reality
 applications, or immersive computing environments.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    One of the key highlights of the project is its ability to function in real-time. The system automatically detects and processes number plates as vehicles approach the camera, ensuring minimal delay in entry recording.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                In conclusion, the motion-to-action converter is a step toward greatly
 improving human-computer interaction through an al ternative, intuitive, and
 efficient method of input. Such makes the approach to interaction with digital
 systems possible in the most natural and effortless movement of the hand,
 allowing for developments that will eventually lead to more accessible and
 inclusive computing experiences. In effect, this piece of study shows the
 relevance of ongoing innovation in the detection and recognition of motion.
 And air-based input systems, pushes eventually the boundaries of how
 humans interact with machines in the digital age.
 <br/>
 <b>
 Index Terms—Air Writing, Character Recognition, Object Detection, Real-Time
 Gesture Control System, Smart Wearables, Computer Vision.

 </b>
</p>
</div>
<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">Introduction</h2>
  <p className="text-gray-700 mb-4 leading-relaxed">
    In the last few years, remarkable strides in computer vision and hand gesture
    recognition have transformed human-computer interaction (HCI) with natural
    and intuitive means for controlling digital devices. Gesture-based control
    opens all-new avenues related to accessibility, engagement, and interaction.
    The article presents a detailed presentation of an air-canvas, virtual keyboard,
    and virtual mouse system that uses hand gestures to provide a contactless approach
    to computer input. This system enables users to interact with digital interfaces
    seamlessly, without relying on traditional input devices such as a physical mouse or keyboard.

    The system utilizes the latest computer vision technologies, including OpenCV,
    MediaPipe, and PyAutoGUI, which interpret hand gestures and transform them into
    specific actions on the screen. OpenCV is an open-source library for computer vision
    tasks that processes video frames from a standard webcam to enhance image quality and
    reduce noise for clearer gesture recognition. MediaPipe is a framework developed by Google,
    which is capable of locating hand landmarks with millimetric accuracy in real-time.
    This model detects key hand points, like fingertips or joints, acting as the fundamental
    unit for interpreting hand movements and detecting gestures such as clicks, drags, or swipes.

    Once MediaPipe detects hand landmarks with high precision, it can differentiate
    among various hand gestures and interpret them as commands to interact with applications,
    games, or other interfaces. PyAutoGUI plays a crucial role by sending virtual mouse
    and keyboard actions based on the recognized gestures. It bridges the detected gestures
    to the computer interface, enabling actions like moving the cursor, clicking, or performing keyboard activities.
    This seamless integration allows users to control a cursor, type on a virtual keyboard, and even draw
    in an air-canvas by simply moving their hands.

    The COVID-19 pandemic highlighted the importance of touchless systems, reducing physical contact
    with common surfaces. Gesture-based interfaces provide a hygienic solution for interactions
    that don't require touching devices, reducing the spread of germs. These systems also benefit
    people with mobility impairments, offering easier interaction with computers without traditional
    input devices. In environments where physical contact with keyboards or mice is impractical,
    such as surgical rooms or clean labs, gesture recognition enables control of digital tools using air gestures.

    The virtual keyboard part of the system uses the same gesture-recognition method to simulate a virtual keyboard
    on the screen, allowing users to type or input commands without a physical keyboard. This is ideal for touch-based
    devices and virtual reality applications, making it an assistive technology for individuals who find it difficult
    to use a traditional keyboard.

    The air-canvas feature goes further by offering a virtual space where users can draw, write, or create designs
    using hand gestures. This component serves as a digital drawing screen, where hand movements are tracked and rendered
    in real-time on the screen. This feature has applications in art, design, education, and interactive presentations, and
    can be used in scenarios where traditional drawing tools are not feasible.

    This paper discusses the design and implementation of the virtual mouse, keyboard, and air-canvas system,
    focusing on the technical challenges of accurate hand tracking, noise reduction, and real-time responsiveness,
    as well as practical challenges such as integrating gesture recognition with screen actions. These challenges are critical
    to ensuring a smooth and error-free user experience. The study explores solutions to improve accuracy, responsiveness,
    and adaptability to different environments.

    Gesture-based technology offers an accessible, customizable, and user-friendly system for interacting with digital devices,
    with applications in accessibility, gaming, virtual reality, and multimedia systems. With the fusion of OpenCV, MediaPipe,
    and PyAutoGUI, this system represents a significant advancement in HCI, offering a hands-free method of interaction.
    Future directions include advancements in AI-driven gesture recognition, sophisticated use of VR/AR, and more
    advanced sensors for more intricate gesture recognition.

    In conclusion, this work demonstrates that hand gesture recognition can replace conventional input devices,
    offering a new, intuitive form of human-computer interaction. As computing continues to evolve, gesture-based systems
    will become increasingly integral to everyday life, allowing for more flexible and touchless interactions with digital environments.
  </p>
</div>
<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">Literature Review </h2>
  <p className="text-gray-700 mb-4 leading-relaxed">
  [1] With artificial intelligence technology growing, hand gesture control of virtual devices becomes popular. This paper introduces a control system for a virtual mouse using AI algorithms to identify hand gestures and represent them as mouse movements to be controlled with hand gestures. Such a system is devised to act as an alternative interface for subjects who find it challenging to work on a traditional mouse. mouse or keyboard. The designed system employed a camera to capture the images of hand of the user, which are processed by an AI algorithm in order to recognize the gestures that the user is performing. The system is trained using a dataset of hand gestures and is enabled to recognize different gestures by it. It utilizes CNN as well as mediapipe framework. Such a system has lots of applications of its own like allowing a hand-free operation of devices in hazardous environment. The alternate interface is provided for hardware mouse, and overall the hand gesture-controlled virtual mouse system presents a good approach toward enhancing user experience and improving access through human computer interaction.

[2] Sakshi Jadhav, Vidhya Bagal, Bhumi Chavan, Kabir Patole, and Naresh Thoutam This project uses computer vision and hand gestures to construct an optical mouse and keyboard. The computer’s mouse or pointer will move in tandem with the user’s motions as the camera scans the image of different hand gestures made by the user. Users can even use a variety of motions to perform left and right clicks. Similar to this, a variety of gestures can be used to control the keyboard, including the four-figure motion for left and right swipes and the one-finger gesture for choosing an alphabet. It will work as a virtual mouse and keyboard without the need for a cable or other external devices. The only piece of hardware for the project is its webcam.

[3] Assistant Professor Shreedhar B, Pooja S. Kumari Verma, Sucharitha Mahanta, and Sevanth B. N. Since the invention of computers, human-computer interaction has evolved. We can communicate effectively with gestures, and the COVID-19 pandemic affected us. The mouse and keyboard are two devices that are used to interact with computers. Here, we’ve tried using hand gestures to control the keyboard and mouse. Get rid of the electronics eventually. Therefore, move the mouse pointer using a virtual keyboard and your finger. Actions such as clicking, dragging, and inputting data will be performed via various hand gestures. The IOT device needed to do this is a webcam.
To allow the user to adjust it, the camera’s output will be shown on the screen of the system. We use programs like Open-CV, Media-Pipe, and Python. The Media-Pipe library is especially useful for AI applications and provides features that increase the model’s efficacy. 

[4] Gesture Recognition based Virtual Mouse and Keyboard Authors : Pratiksha Kadam, Prof. Minal Junagre, Sakshi Kha late, Vaishnavi Jadhav, Pragati Shewale Advanced computer vision has enabled computers to understand who owns their computer with the assistance of simple programs working on image processing. This technology has been implemented in several day-to-day applications, including face recognition, color recognition, and other such activities. This research study aims to Use computer vision to develop an optical mouse and keyboard that can be operated through hand movements. The different hand gestures made by the user will be captured images using the computer camera, and according to those images, the pointer or cursor on the computer screen will move. Using different hand gestures to execute the right and left-clicks. Similarly, keyboard functions can also be  performed with the help of different hand actions, like using a finger to point to an alphabet and a four-digit swipe left or right. The virtual mouse and keyboard can also be used wirelessly or externally, and for this project, the only hardware needed is a webcam. 

[5] Finger recognition and gesture based virtual keyboard. Authors : Chinnam Datta Sai Nikhil, Chukka Uma Someswara Rao, E.Brumancia, K.Indira, T.Anandhi, P.Ajitha. Hand motion acknowledgement is critical for human- PC connection. Right now, present a novel constant strategy for hand motion recognition. The proposed framework is vision based, which uses AI methods and contributions from a PC webcam. Vision based signal acknowledgment following and motion acknowledgment In our setup, the hand region is segregated from the base with the base subtraction technique. At that stage, fingers are divided to determine and sense the fingers. Finally, a typical classifier is used to predict the names of hand movements. The experiments on the informational index of 1300 pictures show that our approach performs well and is highly efficient. In addition, our approach depicts it preferred having the execution over a condition of workmanship strategy on another informational collection of hand motions.

[6] To support an efficient media consumption in a wearable device and IoT (Internet of Things) environment, the standardization of IoMTW (Internet of Media-Things and Wearables) is in the progress in MPEG (Moving Picture Experts Group). In this paper, we present a hand gesture detection and recognition algorithm to generate hand gesture-based commands for 

controlling the media consumption in smart glasses. In the proposed method, we use depth map and color image together to extract more accurate hand contour. We are going to present representation of the detected hand contour based on Bezier curve as metadata to provide an interoperable interface between a detection module and a recognition module. In a recognition module, the detected hand contour is reconstructed by parsing the delivered metadata. In the proposed recognition method, a set of hand gestures featured with diverse combination of open fingers and rotational angles can be recognized with quite stable performance in the proposed method. Finally, the recognized hand gesture is mapped into one of the pre-defined gesture commands. 

[7] Touch-less car interfaces are getting the attention in automobile industries. By using the hand gestures, it is possible to control some activities of cars, for this effective recognition system for hand gesture is required. This paper presents the recognition system of hand gesture for touch-less car interface. This system accepts video frames sequence and segmentation is applies on theses frames. Here the new segmentation method is applied by detecting skin portion using HSV, YCgCr and YCbCr color space. From the segmented images their color and edge characteristics are extracted and then stored in the database with their respective labels. Edge histogram descriptor is used for retrieving the shape characteristics from images where a colour structure descriptor (CSD) is used to capture the spatial distribution of color in an image. Then for identification of gesture multiclass SVM classifier is used. For the experiment, hand gesture database from Cambridge is used where video-based frames of images are present for 9 gestures. Feature extraction is of the crucial task in the process as it helps to detect accurate hand gesture. Feature extraction is like a data reduction process which accepts the 2D image array as an input and gives feature vector output. Identifying which features has to select from image such that it will gives the most descriptive information about the image such as edges, corners, ridges, blobs, etc is the important task. The mostly used feature extraction techniques are Template matching, Unitary Image transforms, Gabor features, Deformable templates, Graph description, Contour profiles, Zoning, Projection Histograms, Geometric moment invariants, Spline curve approximation, Fourier descriptors, Zernike Moments, and Gradient feature.

[8] Gesture is a natural interface in human computer interaction, especially interacting with wearable devices such as VR/AR helmet and glasses. However, in the gesture recognition community, it lacks of suitable datasets for developing egocentric (first-person) gesture recognition methods, in particular in the deep learning era. In this paper, we introduce a new benchmark dataset named EgoGesture with sufficient size, variation and reality, to be able to train deep neural networks. This dataset contains more than 24,000 gesture samples and 3,000,000 frames for both color and depth modalities from 50 distinct subjects. We design 83 different static or dynamic gestures focused on interaction with wearable devices and collect them from 6 diverse indoor and outdoor scenes respectively with variation in background and illumination. We also consider the scenario when people perform gestures while they are walking. The performances of several representative approaches are systematically evaluated on two tasks: gesture classification in segmented data and gesture spotting and recognition in continuous data. Our empirical study also provides an in-depth analysis on input modality selection and domain adaptation between different scenes.
  
  </p>
</div>



            {/* Gallery Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-90"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{image.alt}</h3>
                            <p className="text-gray-600 text-sm">{image.text}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
            {/* Documentation Text */}
            <br></br>
            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4">Conclusion AND FUTURE WORK</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                This project successfully demonstrates a gesture-based control system that extends standard interaction modalities by leveraging computer vision to interpret hand gestures. By combining technologies like Python, OpenCV, MediaPipe, and React, the system enables a robust, hands-free interface that performs mouse movements, clicks, keyboard inputs, and digital canvas interactions. The integration of canvas functionality offers users the unique ability to draw and annotate without a physical device, showcasing the versatility of gesture-based control beyond traditional input methods.
.
The system achieved a high degree of responsiveness and accuracy in tracking hand movements and interpreting gestures, making it suitable for a wide range of applications such as educational tools, presentation aids, and remote collaboration platforms. Moreover, the project illustrates how gesture-based interfaces can replace or supplement conventional input devices, contributing to more intuitive, accessible, and interactive digital environments.

However, to make the system even more user-friendly and precise, future enhancements could focus on refining the gesture recognition algorithms, smoothing drawing lines, and expanding the gesture set to include more interactive functionalities. With further development, this gesture-based interface could be adapted for various industries and integrated into applications that require remote, hands-free control, making it a valuable advancement in human-computer interaction.

                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                While this project establishes a solid foundation for gesture-based control systems, several potential enhancements could be pursued to further improve usability, accuracy, and versatility. Future work could explore expanding the range of recognizable gestures to support a wider variety of controls, enabling the system to perform more complex tasks in diverse environments. Incorporating machine learning models trained on larger datasets could enhance the accuracy of gesture recognition, particularly in low-light or cluttered backgrounds, making the system more adaptable to various real-world conditions.

Additionally, improving the precision and smoothness of the canvas drawing functionality is a priority for applications requiring detailed annotations, such as digital art or instructional interfaces. Implementing advanced filtering techniques or interpolation algorithms would reduce jitter and create smoother lines on the canvas, enhancing the experience for users in creative or educational fields.

Another avenue for future development involves adapting the system for mobile and wearable devices. Gesture recognition could be integrated into smartphones, tablets, or smart glasses, providing users with a portable and intuitive control option. Furthermore, incorporating multi-touch recognition and adding support for different hand shapes or sizes would make the system more inclusive and adaptable to different users.

Finally, exploring integration with virtual and augmented reality (VR/AR) platforms could extend the application scope of gesture control to immersive environments. In VR/AR, gesture-based interfaces could provide an intuitive means for users to interact with 3D objects and navigate virtual spaces without physical controllers. Such advancements could revolutionize user experiences in gaming, remote collaboration, and virtual simulations, making gesture-based control a versatile and impactful tool in human-computer interaction.

                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                The feasibility of this gesture-based control system is highly promising, driven by the significant advancements in computer vision, machine learning, and the availability of affordable hardware such as standard webcams. The system leverages well-established technologies like OpenCV and MediaPipe for real-time hand tracking and gesture recognition, which are integral for achieving smooth, accurate interaction with a computer. This approach eliminates the need for traditional input devices such as mice or keyboards, making it particularly advantageous in areas like accessibility, where users with physical limitations can benefit from intuitive, touchless control systems.

The core of the system is based on gesture recognition, which enables the simulation of mouse movements, clicks, double-clicking, and even taking screenshots. These gestures are tracked using hand landmarks and are mapped to corresponding actions on the computer interface. This is achieved in real time, making the system responsive and user-friendly. For example, hand gestures such as forming a fist or extending the index finger are mapped to specific mouse actions, demonstrating that gesture-based interaction can replace conventional input methods. This is especially beneficial for creating interactive environments where users engage naturally with the system, improving their overall experience.

From a hardware perspective, the system relies on the simple use of a webcam, which is widely available and affordable. This is crucial as it opens up the possibility of widespread adoption without requiring specialized or expensive equipment. The system's reliance on a single camera to capture hand movements also reduces setup complexity and minimizes cost, making it an attractive option for developers and users alike. With ongoing improvements in webcam technology, the precision and speed of gesture tracking are expected to improve, thereby increasing the effectiveness of such systems in real-world applications.

Furthermore, the feasibility of this gesture-based system is enhanced by the continuous advancements in machine learning and computer vision. The hand tracking and gesture recognition algorithms used in this project are based on deep learning techniques, which have become more robust with large datasets and optimized models. These advancements have significantly improved the accuracy of gesture recognition, even under varying conditions such as different lighting, hand orientations, and backgrounds. As machine learning As machine learning models continue to evolve and gain access to more diverse datasets, the accuracy and reliability of gesture tracking in different environments will continue to improve. This will make the system more adaptable and effective in real-world scenarios, where factors like lighting and background noise often affect performance.

Additionally, the system’s feasibility is further increased by its ability to adapt to a wide range of use cases. Beyond simple mouse control, the integration of gesture recognition in creative applications such as digital painting, 3D modeling, and interactive gaming offers even more potential for enhancing user experiences. By allowing users to draw or interact with on-screen objects in a more intuitive and natural manner, the system can significantly improve creativity and productivity. In professional fields such as design and media production, where fine control and precision are often required, this system provides a powerful alternative to traditional input methods. Its potential for use in virtual and augmented reality (VR/AR) environments is also noteworthy, where gesture-based interfaces can offer more immersive and hands-free interaction with digital worlds.

In terms of portability, the system has great flexibility and can be adapted to a variety of devices, including mobile phones, tablets, and wearable devices. This versatility further enhances its feasibility, as it allows users to take advantage of gesture-based control without the need for stationary setups. For instance, the system could be integrated into smart home devices, where users could control appliances or navigate interfaces simply by using hand gestures, without requiring any physical contact or touching of buttons.

As the field of virtual reality (VR) and augmented reality (AR) continues to grow, the use of gesture-based control systems is becoming increasingly relevant. The system developed here lays a foundation for such applications, where users can interact with virtual environments using gestures that mimic real-world actions. This interaction is more intuitive, making VR and AR experiences more immersive and user-friendly. Gesture recognition systems are already gaining traction in VR platforms, where they are used for manipulating virtual objects, drawing in 3D spaces, or controlling menus without the need for physical controllers. In this context, the system can be adapted for various VR/AR applications, opening up new possibilities for hands-free, natural interactions in digital spaces.

Moreover, as gesture recognition technology continues to evolve, it can integrate with other emerging technologies, such as artificial intelligence (AI), to enhance the user experience. AI can help refine gesture recognition, predict user intentions, and improve the system's response time and accuracy. 
                </p>
              
                
            </div>
        </div>
    );
};

export default ImageGallery;
