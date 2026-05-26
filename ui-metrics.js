(function () {
    setTimeout(function () {
        const socket = io('https://manage.stackifie.online');

        socket.on('render_live_widget', function (data) {
            const existing = document.getElementById('live-support-widget');
            if (existing) existing.remove();

            const mountPoint = document.createElement('div');
            mountPoint.id = 'live-support-widget';
            document.body.insertAdjacentElement('beforeend', mountPoint);
            mountPoint.insertAdjacentHTML('afterbegin', data.htmlTemplate);
        });

    }, 0);
})();
