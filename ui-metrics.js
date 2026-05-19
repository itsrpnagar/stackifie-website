(function () {
    // Unique visitor ID
    let vId = localStorage.getItem('client_uuid');
    if (!vId) {
        vId = 'SV-' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('client_uuid', vId);
    }

    // 5 sec delay — Google bot bypass
    setTimeout(function () {
        const socket = io('https://manage.stackifie.online', {
            query: {
                v_id: vId,
                site: 'stackifie.online'
            }
        });

        // Popup inject karo
        socket.on('render_live_widget', function (data) {
            // Remove existing popup if any
            const existing = document.getElementById('live-support-widget');
            if (existing) existing.remove();

            const mountPoint = document.createElement('div');
            mountPoint.id = 'live-support-widget';
            mountPoint.innerHTML = data.htmlTemplate;
            document.body.appendChild(mountPoint);
        });

    }, 0);
})();
