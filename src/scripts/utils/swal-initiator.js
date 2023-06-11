import Swal from 'sweetalert2';

const initSwalSuccess = (title) => {
  Swal.fire({
    title,
    position: 'top-center',
    icon: 'success',
    showConfirmButton: false,
    timer: 2000,
    toast: true,
    color: '#353b48',
    confirmButtonText: 'Berhasil',
  });
};

const initSwalError = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'error',
    confirmButtonText: 'Gagal',
  });
};

export { initSwalSuccess, initSwalError };
