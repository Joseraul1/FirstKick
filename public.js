document.getElementById('submitPost').addEventListener('click', function() {
    const postContent = document.getElementById('postContent').value;
    const imageFile = document.getElementById('uploadImage').files[0];
    const videoFile = document.getElementById('uploadVideo').files[0];

    if (postContent.trim() === "" && !imageFile && !videoFile) {
        alert("¡Escribe algo o sube un archivo para publicar!");
        return;
    }

    // Crear el nuevo contenedor para la publicación
    let newPost = document.createElement('div');
    newPost.classList.add('post');

    // Añadir el contenido del texto
    let content = document.createElement('p');
    content.textContent = postContent;
    newPost.appendChild(content);

    // Si se sube una imagen, mostrarla
    if (imageFile) {
        const imageURL = URL.createObjectURL(imageFile);
        let img = document.createElement('img');
        img.src = imageURL;
        img.classList.add('post-image');
        newPost.appendChild(img);
    }

    // Si se sube un video, mostrarlo
    if (videoFile) {
        const videoURL = URL.createObjectURL(videoFile);
        let video = document.createElement('video');
        video.src = videoURL;
        video.controls = true;
        video.classList.add('post-video');
        newPost.appendChild(video);
    }

    // Añadir la nueva publicación al feed
    document.querySelector('.feed').prepend(newPost);

    // Limpiar los campos del formulario
    document.getElementById('postContent').value = '';
    document.getElementById('uploadImage').value = '';
    document.getElementById('uploadVideo').value = '';
});
