/* ==========================================================
   OdontoVita - Lógica del portal "Gestionar Citas"
   Por ahora es una simulación en el navegador: no se guarda
   nada en una base de datos. Los puntos marcados con TODO son
   donde se conectará el backend.
   ========================================================== */

const CLASES_TAB_ACTIVO =
  "flex-1 py-space-sm px-space-md rounded-lg font-label-md text-label-md transition-all font-bold bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center gap-space-xs";

const CLASES_TAB_INACTIVO =
  "flex-1 py-space-sm px-space-md rounded-lg font-label-md text-label-md transition-all font-medium text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-space-xs";

const CLASES_BADGE_BASE =
  "px-space-md py-1 rounded-full font-label-sm text-label-sm font-bold uppercase tracking-wider self-start sm:self-auto";

/* ---------- Pestañas: Solicitar / Consultar ---------- */
function toggleTabs(tab) {
  const btnNueva = document.getElementById("tab-nueva-btn");
  const btnConsultar = document.getElementById("tab-consultar-btn");
  const panelNueva = document.getElementById("panel-nueva-cita");
  const panelConsultar = document.getElementById("panel-consultar-cita");

  const mostrarNueva = tab === "nueva";

  panelNueva.classList.toggle("hidden", !mostrarNueva);
  panelConsultar.classList.toggle("hidden", mostrarNueva);

  btnNueva.className = mostrarNueva ? CLASES_TAB_ACTIVO : CLASES_TAB_INACTIVO;
  btnConsultar.className = mostrarNueva ? CLASES_TAB_INACTIVO : CLASES_TAB_ACTIVO;
}

/* ---------- Preselecciona el servicio desde las tarjetas ---------- */
function seleccionarServicio(nombreServicio) {
  toggleTabs("nueva");
  const select = document.getElementById("servicio-select");
  if (select) {
    select.value = nombreServicio;
  }
}

/* ---------- Solicitar nueva cita ---------- */
function handleNuevaCita(event) {
  event.preventDefault();

  // TODO: enviar los datos del formulario al backend para guardarlos en la base de datos.
  const msg = document.getElementById("msg-exito-reserva");
  if (msg) {
    msg.classList.remove("hidden");
    event.target.reset();
    setTimeout(() => {
      msg.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  }
}

/* ---------- Buscar cita por cédula y celular ---------- */
function handleBuscarCita(event) {
  event.preventDefault();

  // TODO: consultar la cita real en el backend con la cédula y el celular.
  const resultado = document.getElementById("resultado-cita");
  const badge = document.getElementById("badge-estado");
  if (resultado) {
    resultado.classList.remove("hidden");
    badge.textContent = "Confirmada";
    badge.className = "bg-secondary/20 text-secondary " + CLASES_BADGE_BASE;
  }
}

/* ---------- Reprogramar cita ---------- */
function reprogramarCita() {
  // TODO: permitir elegir nueva fecha y hora y actualizar la cita en el backend.
  const fechaHora = document.getElementById("cita-fecha-hora");
  const badge = document.getElementById("badge-estado");
  if (fechaHora) {
    fechaHora.textContent = "Viernes, 25 Oct - 03:30 PM (Reprogramada)";
    badge.textContent = "Reagendada con éxito";
    badge.className = "bg-primary-container text-on-primary " + CLASES_BADGE_BASE;
    alert("Tu cita ha sido reprogramada satisfactoriamente para el Viernes 25 de Octubre a las 3:30 PM.");
  }
}

/* ---------- Cancelar cita ---------- */
function cancelarCita() {
  const badge = document.getElementById("badge-estado");
  if (confirm("¿Estás seguro de que deseas cancelar tu cita programada en OdontoVita?")) {
    // TODO: marcar la cita como cancelada en el backend.
    if (badge) {
      badge.textContent = "Cita Cancelada";
      badge.className = "bg-error-container text-on-error-container " + CLASES_BADGE_BASE;
    }
  }
}