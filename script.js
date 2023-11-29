const divReloj = document.getElementById('contenedor-reloj');
const zona = document.getElementById('zona');
const hora = document.getElementById('hora');
const fecha = document.getElementById('fecha');
const selectContinente = document.getElementById('continente-ingresado');
const inputRegion = document.getElementById('region-ingresada');
let zonaActual = Intl.DateTimeFormat().resolvedOptions().timeZone;

const actualizarReloj = () => {
    let zonaNueva = `${selectContinente.value}/${inputRegion.value.replace(' ', '_')}`;
    try {
        dayjs().tz(zonaNueva).format('HH:mm:ss');
        zonaActual = zonaNueva;
        inputZona.value = '';
    } catch (error) {
        inputZona.value = '';
        alert('Zona ingresada invalida');
    }
};

const actualizarHora = () => {
    zona.textContent = zonaActual.replace('_', ' ');
    hora.textContent = dayjs().tz(zonaActual).format('HH:mm:ss');
    fecha.textContent = dayjs().format('dddd, D MMM YYYY').toUpperCase();
};

actualizarHora();

setInterval(actualizarHora, 1000);
