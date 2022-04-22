import { FormType } from '../../store/dialogSlice';
import { ZalozonyProfil } from './zalozonyProfil';
import { LoginDialog } from './loginDialog';
import { RejestracjaEmail } from './rejestracjEmail'
import { Zalogowano } from './zalogowano';
import {Wyloguj} from './wyloguj';

//  enum Width = [false | "sm" | "md" | "xs" | "lg" | "xl"];
 


export const getDialogEl = (formType: any) => {
  const map = new Map([
 
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
    [
      FormType.wyloguj, 
      {
        title: '',
        component: <Wyloguj />,
        width:'xs'
      }
    ]
  ]);

  return map.get(formType);
};