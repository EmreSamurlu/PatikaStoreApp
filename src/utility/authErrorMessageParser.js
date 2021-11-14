export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz E-posta Adresi';
    case 'auth/email-already-exists':
      return 'E-posta Adresi Mevcut';
    case 'auth/user-not-found':
      return 'Kullanıcı Bulunamadı';
    case 'auth/weak-password':
      return 'Parola çok zayıf';
    case 'auth/wrong-password':
      return 'Parola Geçersiz';
    default:
      return errorCode;
  }
}
