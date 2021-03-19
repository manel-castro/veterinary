export const validateEmail = (email: string): string => {
  if (email.length !== 0) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
    return re.test(String(email).toLowerCase())
      ? ''
      : 'El formato del e-mail es incorrecto.';
  } else {
    return 'Campo vacío.';
  }
};

export const validateTel = (tel: string): string => {
  if (tel.length !== 0) {
    let telLength = tel.length;
    return telLength < 9 ? 'El formato del teléfono es incorrecto.' : '';
  } else {
    return 'Campo vacío.';
  }
};

export const validateNombre = (nombre: string): string => {
  if (nombre.length === 0) {
    return 'Campo vacío.';
  } else return '';
};
