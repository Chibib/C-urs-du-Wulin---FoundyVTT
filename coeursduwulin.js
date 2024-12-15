Hooks.once('ready', () => {
    game.settings.set('pbta', 'hideRollMode', true);
    game.settings.set('pbta', 'hideRollFormula', true);
});
Hooks.on("renderSettings", (app, html) => {
  const links = {
    shop: {
      title: "Cœurs du Wulin by Khelren - itch.io",
      url: "https://khelren.itch.io/coeurs-wulin",
      iconClass: "fa-solid fa-cart-shopping"
    },

    donation: {
      title: "Ko-fi Khelren",
      url: "https://ko-fi.com/khelren",
      iconClass: "fa-regular fa-mug-hot fa-bounce"
    }
  };

  const createButton = (text, iconClass, url) => {
    const button = $(`<button><i class="${iconClass}"></i> ${text}</button>`);
    button.on("click", ev => {
      ev.preventDefault();
      window.open(url, "_blank");
    });
    return button;
  };

  const addLinkButton = (container, link) => {
    const button = createButton(link.title, link.iconClass, link.url);
    container.append(button);
  };

  const title = "Liens de soutien";
  const lotdSection = $(`<h2>${title}  <i class="fa-regular fa-heart"></i></h2>`);
  html.find("#settings-game").after(lotdSection);

  const lotdDiv = $(`<div></div>`);
  lotdSection.after(lotdDiv);

  Object.values(links).forEach(link => {
    addLinkButton(lotdDiv, link);
  });
});



Hooks.once('pbtaSheetConfig', () => {
  // Disable the sheet config form.
  game.settings.set('pbta', 'sheetConfigOverride', true);
  // Define custom tags.
  game.pbta.tagConfigOverride = {
    // Tags available to any actor and item
    general: '[{"value":"fire"},{"value":"water"},{"value":"earth"},{"value":"air"}]',
    actor: {
      // Tags available to all actors
      all: '[{"value":"person"}]',
      // Tags available to a specific actor type set up on game.pbta.sheetConfig.actorTypes (e.g. "character", "npc")
      character: '[{"value":"mook"}]'
    },
    item: {
      // Tags available to all actors
      all: '[{"value":"consumable"}]',
      // Tags available to a specific item type (e.g. "equipment", "move")
      move: '[{"value":"sword"}]'
    }
  }
  // Replace the game.pbta.sheetConfig with your own version.
  game.pbta.sheetConfig = {
    "rollFormula": "2d6",
    "statToggle": {
        "label": "Épuisé",
        "modifier": 0
    },
    "rollShifting": true,
    "rollResults": {
        "success": {
            "start": 10,
            "end": null,
            "label": "Succès!"
        },
        "partial": {
            "start": 7,
            "end": 9,
            "label": "Succès partiel"
        },
        "failure": {
            "start": null,
            "end": 6,
            "label": "Echec ..."
        }
    },
    "actorTypes": {
        "character": {
            "details": {
                "biography": {
                    "label": "Biographie",
                    "value": ""
                }
            },
            "stats": {
                "terre": {
                    "label": "Terre",
                    "value": 0
                },
                "feu": {
                    "label": "Feu",
                    "value": 0
                },
                "metal": {
                    "label": "Metal",
                    "value": 0
                },
                "eau": {
                    "label": "Eau",
                    "value": 0
                },
                "bois": {
                    "label": "Bois",
                    "value": 0
                }
            },
            "attributes": {
                "dilemme": {
                    "label": "Dilemmes",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "",
                    "limited": false,
                    "position": "top",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "[Text]",
                            "value": false
                        },
                        "1": {
                            "label": "[Text]",
                            "value": false
                        }
                    }
                },
                "xp": {
                    "label": "PX",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 8
                },
                "blessure": {
                    "label": "Blessure",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": [
                        "L’Étudiant (Wuxia)",
                        "La Canaille (Wuxia)",
                        "Le Dévoué (Wuxia)",
                        "Le Marginal (Wuxia)",
                        "Le Phénomène (Wuxia)",
                        "Le Sage (Wuxia)"
                    ],
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 1
                },
                "blessurecombatant": {
                    "label": "Blessure",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "Le Dévoué - Combattant (Wuxia)",
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 2
                },
                "lien": {
                    "label": "Liens",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "1": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "2": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "3": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "4": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "5": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "6": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "7": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        }
                    }
                },
                "apparence": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "style": {
                    "label": "Style",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "avancement": {
                    "label": "Avancements",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Ajouter +1 en Terre",
                            "value": false
                        },
                        "1": {
                            "label": "Ajouter +1 en Feu",
                            "value": false
                        },
                        "2": {
                            "label": "Ajouter +1 en Métal",
                            "value": false
                        },
                        "3": {
                            "label": "Ajouter +1 en Eau",
                            "value": false
                        },
                        "4": {
                            "label": "Ajouter +1 en Bois",
                            "value": false
                        },
                        "5": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "Prendre une manœuvre de ton livret"
                        },
                        "6": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            },
                            "label": "Prendre une manœuvre d’un autre livret"
                        },
                        "7": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            },
                            "label": "Gagner une manœuvre personnalisée"
                        }
                    }
                }
            },
            "moveTypes": {
                "role": {
                    "label": "Rôle"
                },
                "livret": {
                    "label": "Manœuvres de livret"
                },
                "basic": {
                    "label": "Manœuvres de base",
                    "playbook": false,
                    "creation": true
                },
                "conflit": {
                    "label": "Manœuvres de conflit",
                    "playbook": false,
                    "creation": true
                }
            },
            "equipmentTypes": {
                "loot": {
                    "label": "Equipement"
                }
            }
        },
        "xianxia": {
            "details": {
                "biography": {
                    "label": "Biographie",
                    "value": ""
                }
            },
            "stats": {
                "terre": {
                    "label": "Terre",
                    "value": 0
                },
                "feu": {
                    "label": "Feu",
                    "value": 0
                },
                "metal": {
                    "label": "Metal",
                    "value": 0
                },
                "eau": {
                    "label": "Eau",
                    "value": 0
                },
                "bois": {
                    "label": "Bois",
                    "value": 0
                }
            },
            "attributes": {
                "dilemme": {
                    "label": "Dilemmes",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": [
                        "L’Étudiant (Xianxia)",
                        "La Canaille (Xianxia)",
                        "La Canaille (Xianxia)",
                        "Le Dévoué (Xianxia)",
                        "Le Dévoué - Combattant (Xianxia)",
                        "Le Marginal (Xianxia)",
                        "Le Marginal - Maudit (Xianxia)",
                        "Le Phénomène (Xianxia)",
                        "Le Sage (Xianxia)"
                    ],
                    "limited": false,
                    "position": "top",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "[Text]",
                            "value": false
                        },
                        "1": {
                            "label": "[Text]",
                            "value": false
                        }
                    }
                },
                "dilemmechasseur": {
                    "label": "Dilemmes",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "La Canaille - Chasseur de montres (Xianxia)",
                    "limited": false,
                    "position": "top",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "[Text]",
                            "value": false
                        },
                        "1": {
                            "label": "[Text]",
                            "value": false
                        },
                        "2": {
                            "label": "[Text]",
                            "value": false
                        }
                    }
                },
                "malediction": {
                    "label": "Malédiction",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "Le Marginal - Maudit (Xianxia)",
                    "limited": false,
                    "position": "left",
                    "type": "Clock",
                    "value": 0,
                    "max": 4
                },
                "xp": {
                    "label": "PX",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 8
                },
                "blessure": {
                    "label": "Blessure",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": [
                        "L’Étudiant (Xianxia)",
                        "La Canaille (Xianxia)",
                        "La Canaille (Xianxia)",
                        "Le Dévoué (Xianxia)",
                        "La Canaille - Chasseur de montres (Xianxia)",
                        "Le Marginal (Xianxia)",
                        "Le Marginal - Maudit (Xianxia)",
                        "Le Phénomène (Xianxia)",
                        "Le Sage (Xianxia)"
                    ],
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 1
                },
                "blessurecombatant": {
                    "label": "Blessure",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "Le Dévoué - Combattant (Xianxia)",
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 2
                },
                "lien": {
                    "label": "Liens",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "1": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "2": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "3": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "4": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "5": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "6": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "7": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        }
                    }
                },
                "apparence": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "style": {
                    "label": "Style",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "avancement": {
                    "label": "Avancements",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Ajouter +1 en Terre",
                            "value": false
                        },
                        "1": {
                            "label": "Ajouter +1 en Feu",
                            "value": false
                        },
                        "2": {
                            "label": "Ajouter +1 en Métal",
                            "value": false
                        },
                        "3": {
                            "label": "Ajouter +1 en Eau",
                            "value": false
                        },
                        "4": {
                            "label": "Ajouter +1 en Bois",
                            "value": false
                        },
                        "5": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "Prendre une manœuvre de ton livret"
                        },
                        "6": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            },
                            "label": "Prendre une manœuvre d’un autre livret"
                        },
                        "7": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            },
                            "label": "Gagner une manœuvre personnalisée"
                        }
                    }
                }
            },
            "moveTypes": {
                "role": {
                    "label": "Rôle"
                },
                "livret": {
                    "label": "Manœuvres de livret"
                },
                "basic": {
                    "label": "Manœuvres de base",
                    "playbook": false,
                    "creation": true
                },
                "conflit": {
                    "label": "Manœuvres de conflit",
                    "playbook": false,
                    "creation": true
                },
                "xianxia": {
                    "label": "Manœuvres xianxia",
                    "playbook": false,
                    "creation": true
                }
            },
            "equipmentTypes": {
                "loot": {
                    "label": "Equipement"
                }
            },
            "baseType": "character"
        },
        "cour": {
            "details": {
                "biography": {
                    "label": "Biographie",
                    "value": ""
                }
            },
            "stats": {
                "terre": {
                    "label": "Terre",
                    "value": 0
                },
                "feu": {
                    "label": "Feu",
                    "value": 0
                },
                "metal": {
                    "label": "Metal",
                    "value": 0
                },
                "eau": {
                    "label": "Eau",
                    "value": 0
                },
                "bois": {
                    "label": "Bois",
                    "value": 0
                }
            },
            "attributes": {
                "dilemmes": {
                    "label": "Dilemmes",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "top",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "[Text]",
                            "value": false
                        },
                        "1": {
                            "label": "[Text]",
                            "value": false
                        }
                    }
                },
                "blessure": {
                    "label": "Blessure",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": [
                        "L’Étudiant (Cour)",
                        "La Canaille (Cour)",
                        "Le Dévoué (Cour)",
                        "Le Marginal (Cour)",
                        "Le Phénomène (Cour)",
                        "Le Sage (Cour)"
                    ],
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 1
                },
                "blessurecombatant": {
                    "label": "Blessure",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "Le Dévoué - Combattant (Cour)",
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 2
                },
                "influence": {
                    "label": "Influence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "Resource",
                    "value": 0,
                    "max": 3
                },
                "xp": {
                    "label": "PX",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "Xp",
                    "value": 0,
                    "max": 8
                },
                "objectif": {
                    "label": "Objectif",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "lien": {
                    "label": "Liens",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "1": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "2": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "3": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "4": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "5": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "6": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        },
                        "7": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "[Text]"
                        }
                    }
                },
                "apparence": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "style": {
                    "label": "Style",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "avancement": {
                    "label": "Avancements",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Ajouter +1 en Terre",
                            "value": false
                        },
                        "1": {
                            "label": "Ajouter +1 en Feu",
                            "value": false
                        },
                        "2": {
                            "label": "Ajouter +1 en Métal",
                            "value": false
                        },
                        "3": {
                            "label": "Ajouter +1 en Eau",
                            "value": false
                        },
                        "4": {
                            "label": "Ajouter +1 en Bois",
                            "value": false
                        },
                        "5": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "Prendre une manœuvre de ton livret"
                        },
                        "6": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            },
                            "label": "Prendre une manœuvre d’un autre livret"
                        },
                        "7": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            },
                            "label": "Gagner une manœuvre personnalisée"
                        }
                    }
                }
            },
            "moveTypes": {
                "role": {
                    "label": "Rôle"
                },
                "livret": {
                    "label": "Manœuvres de livret"
                },
                "basic": {
                    "label": "Manœuvres de base",
                    "playbook": false,
                    "creation": true
                },
                "conflit": {
                    "label": "Manœuvres de conflit",
                    "playbook": false,
                    "creation": true
                },
                "social": {
                    "label": "Manœuvres sociales",
                    "playbook": false,
                    "creation": true
                }
            },
            "equipmentTypes": {
                "loot": {
                    "label": "Equipement"
                }
            },
            "baseType": "character"
        },
        "npc": {
            "details": {
                "biography": {
                    "label": "Biographie",
                    "value": ""
                }
            },
            "attributes": {
                "details": {
                    "label": "Détails descriptifs",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "personality": {
                    "label": "Personnalité ou Rôle",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "quote": {
                    "label": "Citation",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "gm": {
                    "label": "Manoeuvres de MJ"
                },
                "ind": {
                    "label": "Indices"
                },
                "indtref": {
                    "label": "Indices des tréfonds"
                }
            },
            "equipmentTypes": {
                "loot": {
                    "label": "Equipement"
                }
            }
        }
    }
};


});