import { FormType } from '../../store/dialogSlice';
// import { Rejestracja } from './dialogs/Rejestracja/Rejestracja';
import { ZalozonyProfil } from './zalozonyProfil';
import { LoginDialog } from './loginDialog';
import { RejestracjaEmail } from './rejestracjEmail'
import { Zalogowano } from './zalogowano';
// import ImagePicker from './dialogs/ImagePicker/ImagePicker';

// rodzaje szerokości type Width = false | "sm" | "md" | "xs" | "lg" | "xl";

// interface formType{
//   rejestracja: string,
//   zalozonyProfil:string,
//   loginDialog: string,
//   rejestracjaEmail:string,
//   zalogowano:string
// }

export const getDialogEl = (formType: any) => {
  const map = new Map([
    // [
    //   FormType.rejestracja,
    //   {
    //     title: 'Zarejestruj się',
    //     component: <Rejestracja />,
    //     width: "xs",
    //   },
    // ],
    [
      FormType.zalozonyProfil,
      {
        title: 'GRATULACJE!',
        component: <ZalozonyProfil />,
        width: "xs",
      },
    ],
    [
      FormType.loginDialog,
      {
        title: 'LOGOWANIE',
        component: <LoginDialog />,
        width: "xs",
      },
    ],
    [
      FormType.rejestracjaEmail,
      {
        title: 'REJESTRACJA',
        component: <RejestracjaEmail />,
        width: "xs",
      },
    ],
    [
      FormType.zalogowano,
      {
        title: '',
        component: <Zalogowano />,
        width: "xs",
      },
    ],
  ]);

  return map.get(formType);
};