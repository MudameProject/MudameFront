//REMOVER USURIO Y EMAIL GIT//

git config --global --list

git config --global --unset-all user.name
git config --global --unset-all user.email

This would unset global credential helper.

git config --global --unset credential.helper

--------------------------------------------------------------

//INSERTAR USURIO Y EMAIL GIT//

git config --global --list

git config --global user.name "nicoluna319"

git config --global user.email "nicolaslunaromero@gmail.com"