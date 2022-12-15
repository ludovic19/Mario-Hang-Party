# Mario Hang PARTY
by Elyes, Dimitri, Ludovix
#
#
Voici le résultat du 1er projet de groupe durant la formation web-dev de IronHack.


- date: Du 16 Dec. au 23 Dec. 2022

- challenge: Une semaine pour coder en groupe un jeu coté serveur 
- langage: HTML-CSS-JAVASCRIPT 
  #

  ### Le jeu

Bowser a encore une fois kidnapé la Princesse Peach et Mario court encore à l'aventure pour la secourir!
  Sur principe du pendu, vous devez trouver le mot dont seules les première et dernière lettre s'affichent. Un indice vous est proposé et vous devez suggérer des lettres en cliquant sur l'alphabet affiché à l'écran. Chaque lettre n'est cliquable qu'une seule fois par mot. Si la lettre selectionnée est présente dans le mot, celle-ci s'affiche à la place du ? qui la remplace et vous passez au niveau suivant. Si elle n'y est pas, vous perdez une des 5 vies que vous disposez dès le  début (le nombre de vies correspond au nombre de tête de Toad que vous voyez).
  Vous devez passer les 3 niveaux pour sauver Peach et déjouer les plans de Bowser.
  Si vous perdez toutes vos vies... GAME OVER ! Vous recommencez au niveau 1 et devez trouver de nouveaux mots !
Si vous trouvez le dernier mot... BRAVO! Mario délivre Peach, le jeu est terminé!
#
  ### Les BONUS


  A la fin de chaque niveau, un défi attend Mario pour obtenir des bonus de vie ou de temps.

  1 - **Labyrinth** 

Vous accéderez automatiquement à ce 1er bonus après le premier niveau.
#
  A l'aide des flèches multidirectionnelles, trouvez vite la sortie avant la fin du temps !
  Si vous y arrivez, vous pourrez choisir entre une vie supplémentaire ou du temps supplémentaire pour trouver les prochains mots. A vous d'établir votre stratégie !
  Si vous n'y parvenez pas... c'est un bonus, vous ne perdez rien, le jeu continue. et vous devez trouver le prochain mot dans les même conditions que vous avez terminé le niveau précédent
  #
  
  2 - **Pong**
 #
 Le second bonus se présente à vous lorsque vous terminez le second niveau. Cette fois-ci rien à gagner, Bowser vous lance un défi !
 
 Avec l'aide des fleches up et down, vous devez envoyer un champignon derrier la ligne de Bowser tout en protégeant la votre. Si vous marquez 3 points vous avez gagné, si c'est Bowser vous avez perdu. ET le jeu continue.

3 - **Des musiques**

Certaines étapes vous rappelleront les musiques de votre jeu d'enfance favori !
Et si vous avez la nostalgie, voici un lien pour toutes les réécouter ! `https://downloads.khinsider.com/mario`.


4 - **To be continued...** 

D'autres Bonus sont à venir, restez informés !


## Le contenu
#
#
Vous trouverez 3 dossiers correspondants aux 3 étapes du jeu
et contenant chacun les fichiers HTML/CSS et JAVASCRIPT

- **hangMario**
Tous les fichiers concernant le jeu principal
- **LabMario**
Tous les fichiers concernant le labyrinth
- **pongMario**
Tous les fichiers concernant le pong contre Bowser


### Quelques points techniques

Les mots sont conservés dans des objects. Chaque objet est constitué d'un mot avec son indice.
Les mots sont affichés aléatoirement en utilisant Mathrandom() pour créer l'indice de chaque élément du tableau et forEach pour les parcourir.