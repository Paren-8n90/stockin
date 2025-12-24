const c_jeonja = document.getElementById('c_jeonja');
const c_hangonguju = document.getElementById('c_hangonguju');
const c_cha = document.getElementById('c_cha');
const c_enter = document.getElementById('c_enter');
const c_shikpoom = document.getElementById('c_shikpoom');
const c_gunsul = document.getElementById('c_gunsul');
const c_game = document.getElementById('c_game');
const c_jaeyak = document.getElementById('c_jaeyak');
const c_it = document.getElementById('c_it');
const c_joongongup = document.getElementById('c_joongongup');

var jeonja_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'N 전자',
                data: [65200],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var hangonguju_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'S 항공우주',
                data: [54100],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var cha_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'U 차',
                data: [247500],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var enter_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'Z 엔터',
                data: [196700],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var shikpoom_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'O 식품',
                data: [405700],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var gunsul_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'P 건설',
                data: [25800],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var game_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'R 게임',
                data: [22500],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var jaeyak_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'T 제약',
                data: [59800],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var it_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'X IT',
                data: [187700],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var joongongup_data = {
    type: 'line',
    data: {
        labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
        datasets: [
            {
                label: 'H 중공업',
                data: [220400],
                borderWidth: 1,
                borderColor: 'black'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "주가 (원)",
                    font: {
                        size: 10
                    }
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.1;
                }
            }
        },
        animation: false
    }
};

var chart_jeonja = new Chart(c_jeonja, jeonja_data);
var chart_hangonguju = new Chart(c_hangonguju, hangonguju_data);
var chart_cha = new Chart(c_cha, cha_data);
var chart_enter = new Chart(c_enter, enter_data);
var chart_shikpoom = new Chart(c_shikpoom, shikpoom_data);
var chart_gunsul = new Chart(c_gunsul, gunsul_data);
var chart_game = new Chart(c_game, game_data);
var chart_jaeyak = new Chart(c_jaeyak, jaeyak_data);
var chart_it = new Chart(c_it, it_data);
var chart_joongongup = new Chart(c_joongongup, joongongup_data);