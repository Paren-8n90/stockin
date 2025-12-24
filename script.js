const story = Math.floor(Math.random()*4+1);

const vote = Math.floor(Math.random()*2+1);

const news_1_3_head = [
    '[1주차] 인기 아이돌 ☆, 컴백 예정',
    '[1주차] 신인 아이돌 ★★, 데뷔가 코앞까지 다가왔다',
    '[1주차] 신인 아이돌 ★★, 데뷔가 코앞까지 다가왔다',
    '[1주차] 인기 아이돌 ☆, 컴백 예정'
];
document.getElementById("news_1_3").innerText = news_1_3_head[story-1];
const news_1_3_sub = [
    '저번 컴백 때 큰 인기를 끌었던 그룹 ☆이 이주 이내로 컴백할 것으로 밝혔다. 리더인 @@@은 "이번 곡은 저희가 열심히 만든 곡이니 부디 잘 들어주시길 바란다"라며 설렘을 표했다.',
    '저번에 연습 도중 장면이 찍혀 화제가 되었던 연습생이 드디어 데뷔를 한단 소식이 알려졌다. 인원은 총 3명으로 “우리의 모습을 기대하길 바란다”라고 알렸다.',
    '저번에 연습 도중 장면이 찍혀 화제가 되었던 연습생이 드디어 데뷔를 한단 소식이 알려졌다. 인원은 총 3명으로 “우리의 모습을 기대하길 바란다”라고 알렸다.',
    '저번 컴백 때 큰 인기를 끌었던 그룹 ☆이 이주 이내로 컴백할 것으로 밝혔다. 리더인 @@@은 "이번 곡은 저희가 열심히 만든 곡이니 부디 잘 들어주시길 바란다"라며 설렘을 표했다.'
];
document.getElementById("news_1_3_sub").innerText = news_1_3_sub[story-1];


const news_3_1_head = [
    '[3주차] N사, 이번 휴대폰은 카메라가 8개',
    '[3주차] 곧 출시되는 N사의 새 핸드폰, “당신이 경험하지 못한 배터리 성능”',
    '[3주차] N사, “이번 신제품은 카메라가 무려 6개가 달려있어”',
    '[3주차] N사, “곧 휴대폰 출시 예정”'
];
document.getElementById("news_3_1").innerText = news_3_1_head[story-1];
const news_3_1_sub = [
    'N사는 "새로 나오는 휴대폰의 카메라가 8개라는 점에 집중해 주시길 바라며, 그로 인해 더 선명해진 화질을 기대할 수 있습니다"라고 밝혔다.',
    'N사는  이번에 새로 출시하는 휴대폰의 가장 좋은 성능 중 하나를 뽑으라 하면 배터리를 뽑을 정도로 그에 대해 자신감을 드러냈다.',
    'N사가 이번에 낸 새 휴대폰에서 가장 큰 특징은 6개의 카메라이다. 이에 대한 소비자들의 선호도에 흥망이 달려있다.',
    'N사가 며칠 이내로 휴대폰을 출시한다. N사는 새로운 휴대폰의 저장공간을 가장 큰 장점으로 뽑았다.'
];
document.getElementById("news_3_1_sub").innerText = news_3_1_sub[story-1];


const news_3_2_head = [
    '[3주차] Y, B보드 1위 달성',
    '[3주차] 신인 아이돌 뮤비조회수 1억 돌파',
    '[3주차] 신인 아이돌 그룹 ★★, “이대로 하락하나”',
    '[3주차] 인기 아이돌 ☆ 실력, "알고 보니 다 거짓말?"'
];
document.getElementById("news_3_2").innerText = news_3_2_head[story-1];
const news_3_2_sub = [
    '이번에 컴백한 그룹 Y의 곡인 □□□가 B보드 차트 1위를 하며 큰 인기를 끌어 화제가 되고 있다. 곡의 중독성과 뮤비가 가장 큰 이유를 차지하는 것으로 보인다.',
    '신인 아이돌 ★★의 뮤비 조회수가 오늘 오전 10시 기준으로 1억회를 돌파했다. 이번 기록은 신인 아이돌로써 새로운 발자취를 남길 수 있을 것으로 추정된다.',
    '신인 아이돌 ★★ 멤버 중 메인 보컬을 담당하는 m씨의 학폭 논란이 불거지고 있다. 증거 또한 너무 명백하며, 가해자 또한 제 잘못을 인정하는 것으로 보인다.',
    '인기 아이돌인 ☆의 진짜 실력이 라이브를 통해 다 드러났다. 라이브가 이뤄지던 도중 음향 문제가 생기며 생 목소리가 나가게 되었던 것이다.'
];
document.getElementById("news_3_2_sub").innerText = news_3_2_sub[story-1];

const news_3_3_head = [
    '[3주차] O사의 라면, 품절 대란 일어날 정도로 인기 폭발',
    '[3주차] O사의 라면, 품절 대란 일어날 정도로 인기 폭발',
    '[3주차] “매워도 너무 매워” O사의 잘못?',
    '[3주차] “매워도 너무 매워” O사의 잘못?'
];
document.getElementById("news_3_3").innerText = news_3_3_head[story-1];
const news_3_3_sub = [
    'O사가 얼마 전에 출시한 매운 라면이 편의점에 가면 보기 힘들 정도로 인기가 폭발했다. 강한 중독성과 사람들의 도전 정신을 일으키는 매운맛이 인기 폭발의 가장 큰 이유로 보인다.',
    'O사가 얼마 전에 출시한 매운 라면이 편의점에 가면 보기 힘들 정도로 인기가 폭발했다. 강한 중독성과 사람들의 도전 정신을 일으키는 매운맛이 인기 폭발의 가장 큰 이유로 보인다.',
    'O사가 이번에 낸 라면이 너무 매워 사람들 사이에서 화제가 되고 있다. 사람들의 자극에 맞춰 맵게 만들다가 결국 한계를 넘어버린 것이다.',
    'O사가 이번에 낸 라면이 너무 매워 사람들 사이에서 화제가 되고 있다. 사람들의 자극에 맞춰 맵게 만들다가 결국 한계를 넘어버린 것이다.'
];
document.getElementById("news_3_3_sub").innerText = news_3_3_sub[story-1];

const news_4_1_head = [
    '[4주차] N사의 신작, 기대와는 다른 모습에 실망이 커',
    '[4주차] 새로 출시된 N사 핸드폰 배터리 폭파',
    '[4주차] 카메라 6개, ”오히려 매력 포인트”',
    '[4주차] 카메라 6개, ”오히려 매력 포인트”'
];
document.getElementById("news_4_1").innerText = news_4_1_head[story-1];
const news_4_1_sub = [
    '이번에 카메라가 8개라고 광고했던 N사, 도리어 그 점이 허점이 되고 말았다. 가장 크게 비판받는 점이 카메라가 8개라는 것이다.',
    '얼마 전 새로 출시했던 N사의 휴대폰 배터리가 과열되어 폭파되는 사태가 발생했다. 이로 인한 피해자를 모으고 있으며, N사는 그 사건에 대한 책임을 물어야 할 것으로 보인다.',
    'N사에서 최근 새로 출시한 핸드폰이 MZ들 사이에서 유행을 타고 있다. 카메라가 6개라는 점이 오히려 특이하고 매력적이란 평가가 대부분이다.',
    'N사에서 최근 새로 출시한 핸드폰이 MZ들 사이에서 유행을 타고 있다. 카메라가 6개라는 점이 오히려 특이하고 매력적이란 평가가 대부분이다.'
];
document.getElementById("news_4_1_sub").innerText = news_4_1_sub[story-1];

const news_4_4_head = [
    '[4주차] 국내 최고 높이 타워 무산?',
    '[4주차] 국내 최고 높이 타워 무산?',
    '[4주차] 국내 최고 높이 타워 건설 완료',
    '[4주차] 국내 최고 높이 타워 건설 완료'
];
document.getElementById("news_4_4").innerText = news_4_4_head[story-1];
const news_4_4_sub = [
    '국내 최고 높이를 가질 것이라 말하던 타워 건설이 갑작스레 무산되었다. 가장 큰 이유는 건설사와의 의견 충돌로 보인다.',
    '국내 최고 높이를 가질 것이라 말하던 타워 건설이 갑작스레 무산되었다. 가장 큰 이유는 건설사와의 의견 충돌로 보인다.',
    '국내 최고 높이를 가진 타워가 일정보다 훨씬 더 빠르게 건설되었다. 이는 대표 ○○이 직접 움직여 일을 해결하려 했기 때문이었다.',
    '국내 최고 높이를 가진 타워가 일정보다 훨씬 더 빠르게 건설되었다. 이는 대표 ○○이 직접 움직여 일을 해결하려 했기 때문이었다.'
];
document.getElementById("news_4_4_sub").innerText = news_4_4_sub[story-1];

const news_5_1_head = [
    '[5주차] 수험생에게 효과가 있다는 T사의 새 영양제, 품절 대란',
    '[5주차] 수험생에게 효과가 있다는 T사의 새 영양제, 품절 대란',
    '[5주차] 영양제, “효과가 하나도 없어”',
    '[5주차] 영양제, “효과가 하나도 없어”'
];
document.getElementById("news_5_1").innerText = news_5_1_head[story-1];
const news_5_1_sub = [
    '3주 전에 출시되었던 영양제가 최근 수험생에게 효과가 있다는 소문이 들기 시작하면서 품절 대란이 일어나기 시작했다.',
    '3주 전에 출시되었던 영양제가 최근 수험생에게 효과가 있다는 소문이 들기 시작하면서 품절 대란이 일어나기 시작했다.',
    'T사가 새로 만든 영양제의 효과가 전혀 없으며 오히려 부작용만 있다는 소문이 퍼졌다. T사의 직원 중 한 명이 밝힌 것으로 알려졌다.',
    'T사가 새로 만든 영양제의 효과가 전혀 없으며 오히려 부작용만 있다는 소문이 퍼졌다. T사의 직원 중 한 명이 밝힌 것으로 알려졌다.'
];
document.getElementById("news_5_1_sub").innerText = news_5_1_sub[story-1];

const news_5_2_head = [
    '[5주차] 전기 자동차의 배터리 폭발, 알고 보니 U사의 새 전기차?',
    '[5주차] 새로 출시된 전기차 배터리 성능 나쁨 이슈',
    '[5주차] 새로 출시된 전기자동차, “이런 디자인이라면 비싸도 탄다.”',
    '[5주차] 새로 출시된 전기자동차, “이런 디자인이라면 비싸도 탄다.”'
];
document.getElementById("news_5_2").innerText = news_5_2_head[story-1];
const news_5_2_sub = [
    '어제 일어난 배터리 사고의 차량이 얼마 전에 출시된 U사의 새로운 전기차로 밝혀졌다. U사는 "성능에 너무 초점을 맞춘 탓에 안전에 미숙한 저희의 탓"이라며 차량의 회수를 결정했다.',
    '새로 출시되었던 U사의 전기차 배터리 성능이 충격적일 정도로 좋지 않아 논란이 되고 있다. 다른 장점들을 다 상쇄할만한 것이 배터리라는 판단이다.',
    '새로 출시된 T사의 전기자동차가 예쁜 디자인으로 사람들에게 사랑받고 있다. 특히 자동차의 가격에 비해 몸체가 잘 뽑혔다는 의견이 많다.',
    '새로 출시된 T사의 전기자동차가 예쁜 디자인으로 사람들에게 사랑받고 있다. 특히 자동차의 가격에 비해 몸체가 잘 뽑혔다는 의견이 많다.'
];
document.getElementById("news_5_2_sub").innerText = news_5_2_sub[story-1];

const news_5_3_head = [
    '[5주차] O사의 식품 공장 비위생, 이대로 끝인가?',
    '[5주차] O사의 식품 공장 비위생, 이대로 끝인가?',
    '[5주차] O사 직원, “부당해고는 더이상 남의 일이 아니다”',
    '[5주차] O사 직원, “부당해고는 더이상 남의 일이 아니다”'
];
document.getElementById("news_5_3").innerText = news_5_3_head[story-1];
const news_5_3_sub = [
    '한참 매운 라면으로 유행을 이끌던 O사가 식품 공장 비위생 폭로로 인해 하락세를 타고 있다. 폭로한 사람은 당시 O사의 식품 공장에서 일하던 직원인 것으로 밝혀졌다.',
    '한참 매운 라면으로 유행을 이끌던 O사가 식품 공장 비위생 폭로로 인해 하락세를 타고 있다. 폭로한 사람은 당시 O사의 식품 공장에서 일하던 직원인 것으로 밝혀졌다.',
    'O사에 다니던 I씨가 부당하게 해고당한 사실을 SNS에 올렸던 것이 퍼지고 있다. 또한 I씨는 회사가 시끄러워진 틈을 타 O사의 실제 부당 해고 사실을 인터넷에 전부 까발렸다.',
    'O사에 다니던 I씨가 부당하게 해고당한 사실을 SNS에 올렸던 것이 퍼지고 있다. 또한 I씨는 회사가 시끄러워진 틈을 타 O사의 실제 부당 해고 사실을 인터넷에 전부 까발렸다.'
];
document.getElementById("news_5_3_sub").innerText = news_5_3_sub[story-1];

const news_5_4_head = [
    '[5주차] R사의 새 게임, 확률 조작 논란',
    '[5주차] R사의 새 게임, 확률 조작 논란',
    '[5주차] "이 정도면 볏짚으로 만든 게 더 튼튼하겠다" 아파트 부실공사',
    '[5주차] "이 정도면 볏짚으로 만든 게 더 튼튼하겠다" 아파트 부실공사'
];
document.getElementById("news_5_4").innerText = news_5_4_head[story-1];
const news_5_4_sub = [
    '2주 전에 출시된 R사의 게임이 확률 조작으로 논란에 휩싸였다. 확률에 의존하는 게임인 만큼 확률 조작이 게임 자체에 크게 영향을 미쳤던 탓이었다.',
    '2주 전에 출시된 R사의 게임이 확률 조작으로 논란에 휩싸였다. 확률에 의존하는 게임인 만큼 확률 조작이 게임 자체에 크게 영향을 미쳤던 탓이었다.',
    '대표 ○○이 맡은 아파트가 완공되었다. 그렇지만 안전성 테스트를 통과하지 못했으며, 부실공사라는 소리가 들릴 정도로 안정성이 낮다는 평가를 받았다.',
    '대표 ○○이 맡은 아파트가 완공되었다. 그렇지만 안전성 테스트를 통과하지 못했으며, 부실공사라는 소리가 들릴 정도로 안정성이 낮다는 평가를 받았다.'
];
document.getElementById("news_5_4_sub").innerText = news_5_4_sub[story-1];

const news_6_2_head = [
    "[6주차] 우주선 '오름'의 성공적인 발사",
    "[6주차] 우주선 '오름'의 성공적인 발사",
    '[6주차] 우주선 ‘오름’의 추락?',
    '[6주차] 우주선 ‘오름’의 추락?'
];
document.getElementById("news_6_2").innerText = news_6_2_head[story-1];
const news_6_2_sub = [
    "예상했던 것보다 조금 이른 오늘 아침 11시, 우주선 '오름'이 성공적으로 발사되었다. 총책임자는 걱정했던 배터리 부분도 문제없이 작동해 안심이라고 밝혔다.",
    "예상했던 것보다 조금 이른 오늘 아침 11시, 우주선 '오름'이 성공적으로 발사되었다. 총책임자는 걱정했던 배터리 부분도 문제없이 작동해 안심이라고 밝혔다.",
    '모두가 생각했던 것과는 달리 우주선 ‘오름’은 하늘로 비상한지 얼마 되지 않아 다시 땅으로 곤두박질 쳤다. 이에 대한 가장 큰 이유는 배터리의 문제로 보인다.',
    '모두가 생각했던 것과는 달리 우주선 ‘오름’은 하늘로 비상한지 얼마 되지 않아 다시 땅으로 곤두박질 쳤다. 이에 대한 가장 큰 이유는 배터리의 문제로 보인다.'
];
document.getElementById("news_6_2_sub").innerText = news_6_2_sub[story-1];

const news_6_4_head = [
    '[6주차] 확률 조작 논란에 이어 표절 논란까지. R사, 어디까지 추락하나?',
    '[6주차] 게임 출시 미뤄짐',
    '[6주차] 새로 출시된 게임 역대급 그래픽',
    '[6주차] 갑작스레 인기 급상승한 R사의 게임?'
];
document.getElementById("news_6_4").innerText = news_6_4_head[story-1];
const news_6_4_sub = [
    '얼마 전에 확률 조작 논란에 휩싸였던 R사가 이번에는 표절 논란이 일어 문제가 되고 있다. 몇몇 유저들은 연속해 문제가 폭로되는 것을 보아 아직 밝혀지지 않은 문제도 분명히 있을 것이라고 주장했다.',
    '출시 이틀을 앞두고 R사의 게임의 출시가 미뤄졌다. 생각지도 못한 곳에서 오류가 나타나 게임 플레이가 불가능해졌다고 밝혔다.',
    '이번에 출시된 R사의 게임이 역대급의 그래픽으로 사람들에게 사랑을 받고 있다. 특색있는 그래픽이 한몫한 것으로 보인다.',
    'R사의 새로 출시된 게임이 유명 유튜버의 홍보로 인기가 급상승했다. 유명 유튜버는 “평소에도 이런 류의 게임을 자주 플레이하며, 그가 플레이한 게임은 다 떴다.”라고 자신있게 말했다.'
];
document.getElementById("news_6_4_sub").innerText = news_6_4_sub[story-1];

const news_7_1_head = [
    '[7주차] A, 대선 승리 선언..."21대 대통령 당선돼 영광',
    '[7주차] B, 대선 승리 선언..."21대 대통령 당선돼 영광'
];
document.getElementById("news_7_1").innerText = news_7_1_head[vote-1];

const news_7_1_sub = [
    '[7주차] 이에 따라 A 대통령을 지지하는 N 전자, S 항공우주, R 게임, X IT, H 중공업...의 주가가 상승될 전망',
    '[7주차] 이에 따라 B 대통령을 지지하는 U 차, Z 엔터, O 식품, T 제약...의 주가가 상승될 전망'
];
document.getElementById("news_7_1_sub").innerText = news_7_1_sub[vote-1];

const news_8_1_head = [
    '[8주차] 대통령 당선에 따른 기업들의 주가 변동 관심',
    '[8주차] 대통령 당선에 따른 기업들의 주가 변동 관심'
];
document.getElementById("news_8_1").innerText = news_8_1_head[vote-1];

const news_8_1_sub = [
    'A 대통령 당선에 따라 대통령 지지 선언을 했던 기업들의 주가 상승 유지',
    'B 대통령 당선에 따라 대통령 지지 선언을 했던 기업들의 주가 상승 유지'
];
document.getElementById("news_8_1_sub").innerText = news_8_1_sub[vote-1];

let showIt = document.getElementById('jeonja');
let hideIt1 = document.getElementById('hangonguju');
let hideIt2 = document.getElementById('cha');
let hideIt3 = document.getElementById('enter');
let hideIt4 = document.getElementById('shikpoom');
let hideIt5 = document.getElementById('gunsul');
let hideIt6 = document.getElementById('game');
let hideIt7 = document.getElementById('jaeyak');
let hideIt8 = document.getElementById('it');
let hideIt9 = document.getElementById('joongongup');

function chartJeonja() {
    showIt = document.querySelector('#jeonja');
    hideIt1 = document.querySelector('#hangonguju');
    hideIt2 = document.querySelector('#cha');
    hideIt3 = document.querySelector('#enter');
    hideIt4 = document.querySelector('#shikpoom');
    hideIt5 = document.querySelector('#gunsul');
    hideIt6 = document.querySelector('#game');
    hideIt7 = document.querySelector('#jaeyak');
    hideIt8 = document.querySelector('#it');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartHangonguju() {
    showIt = document.querySelector('#hangonguju');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#cha');
    hideIt3 = document.querySelector('#enter');
    hideIt4 = document.querySelector('#shikpoom');
    hideIt5 = document.querySelector('#gunsul');
    hideIt6 = document.querySelector('#game');
    hideIt7 = document.querySelector('#jaeyak');
    hideIt8 = document.querySelector('#it');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartCha() {
    showIt = document.querySelector('#cha');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#hangonguju');
    hideIt3 = document.querySelector('#enter');
    hideIt4 = document.querySelector('#shikpoom');
    hideIt5 = document.querySelector('#gunsul');
    hideIt6 = document.querySelector('#game');
    hideIt7 = document.querySelector('#jaeyak');
    hideIt8 = document.querySelector('#it');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartEnter() {
    showIt = document.querySelector('#enter');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#hangonguju');
    hideIt3 = document.querySelector('#cha');
    hideIt4 = document.querySelector('#shikpoom');
    hideIt5 = document.querySelector('#gunsul');
    hideIt6 = document.querySelector('#game');
    hideIt7 = document.querySelector('#jaeyak');
    hideIt8 = document.querySelector('#it');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartShikpoom() {
    showIt = document.querySelector('#shikpoom');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#hangonguju');
    hideIt3 = document.querySelector('#cha');
    hideIt4 = document.querySelector('#enter');
    hideIt5 = document.querySelector('#gunsul');
    hideIt6 = document.querySelector('#game');
    hideIt7 = document.querySelector('#jaeyak');
    hideIt8 = document.querySelector('#it');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartGunsul() {
    showIt = document.querySelector('#gunsul');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#hangonguju');
    hideIt3 = document.querySelector('#cha');
    hideIt4 = document.querySelector('#enter');
    hideIt5 = document.querySelector('#shikpoom');
    hideIt6 = document.querySelector('#game');
    hideIt7 = document.querySelector('#jaeyak');
    hideIt8 = document.querySelector('#it');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartGame() {
    showIt = document.querySelector('#game');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#hangonguju');
    hideIt3 = document.querySelector('#cha');
    hideIt4 = document.querySelector('#enter');
    hideIt5 = document.querySelector('#shikpoom');
    hideIt6 = document.querySelector('#gunsul');
    hideIt7 = document.querySelector('#jaeyak');
    hideIt8 = document.querySelector('#it');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartJaeyak() {
    showIt = document.querySelector('#jaeyak');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#hangonguju');
    hideIt3 = document.querySelector('#cha');
    hideIt4 = document.querySelector('#enter');
    hideIt5 = document.querySelector('#shikpoom');
    hideIt6 = document.querySelector('#gunsul');
    hideIt7 = document.querySelector('#game');
    hideIt8 = document.querySelector('#it');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartIt() {
    showIt = document.querySelector('#it');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#hangonguju');
    hideIt3 = document.querySelector('#cha');
    hideIt4 = document.querySelector('#enter');
    hideIt5 = document.querySelector('#shikpoom');
    hideIt6 = document.querySelector('#gunsul');
    hideIt7 = document.querySelector('#game');
    hideIt8 = document.querySelector('#jaeyak');
    hideIt9 = document.querySelector('#joongongup');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
}

function chartJoongongup() {
    showIt = document.querySelector('#joongongup');
    hideIt1 = document.querySelector('#jeonja');
    hideIt2 = document.querySelector('#hangonguju');
    hideIt3 = document.querySelector('#cha');
    hideIt4 = document.querySelector('#enter');
    hideIt5 = document.querySelector('#shikpoom');
    hideIt6 = document.querySelector('#gunsul');
    hideIt7 = document.querySelector('#game');
    hideIt8 = document.querySelector('#jaeyak');
    hideIt9 = document.querySelector('#it');

    showIt.style.display = 'block';
    hideIt1.style.display = 'none';
    hideIt2.style.display = 'none';
    hideIt3.style.display = 'none';
    hideIt4.style.display = 'none';
    hideIt5.style.display = 'none';
    hideIt6.style.display = 'none';
    hideIt7.style.display = 'none';
    hideIt8.style.display = 'none';
    hideIt9.style.display = 'none';
} 


var week = 1; 

var have_jeonja = 0;
var have_hangonguju = 0;
var have_cha = 0;
var have_enter = 0;
var have_shikpoom = 0;
var have_gunsul = 0;
var have_game = 0;
var have_jaeyak = 0;
var have_it = 0;
var have_joongongup = 0;

var money = 10000000;

var price_jeonja = 65200;
var price_hangonguju = 54100;
var price_cha = 247500;
var price_enter = 196700;
var price_shikpoom = 405700;
var price_gunsul = 25800;
var price_game = 22500;
var price_jaeyak = 59800;
var price_it = 187700;
var price_joongongup = 220400;



function change_have() {
    const have_select = document.getElementById("have_select");
    const have = document.getElementById("have");

    if (have_select.value == "전자") {
        have.innerText = have_jeonja;
    }
    else if (have_select.value == "항공우주") {
        have.innerText = have_hangonguju;
    }
    else if (have_select.value == "차") {
        have.innerText = have_cha;
    }
    else if (have_select.value == "엔터") {
        have.innerText = have_enter;
    }
    else if (have_select.value == "식품") {
        have.innerText = have_shikpoom;
    }
    else if (have_select.value == "건설") {
        have.innerText = have_gunsul;
    }
    else if (have_select.value == "게임") {
        have.innerText = have_game;
    }
    else if (have_select.value == "제약") {
        have.innerText = have_jaeyak;
    }
    else if (have_select.value == "IT") {
        have.innerText = have_it;
    }
    else {
        have.innerText = have_joongongup;
    }
}

function buy_change() {
    const buy_number = document.getElementById("buy_number");

    if (buy_number.value < 0) {
        buy_number.value = 0;
    }
    else {
        buy_number.value = Math.floor(buy_number.value);
    }
}

function buy() {
    const buy_company = document.getElementById("buy_company");
    const buy_number = document.getElementById("buy_number");
    const buy_alert = document.getElementById("buy_alert");
    const money_text = document.getElementById("money");
    const have_select = document.getElementById("have_select");
    let buy_total = 0

    if (buy_number.value > 0)
    {
        if (buy_company.value == "전자") {
            buy_total = price_jeonja;
        }
        else if (buy_company.value == "항공우주") {
            buy_total = price_hangonguju;
        }
        else if (buy_company.value == "차") {
            buy_total = price_cha;
        }
        else if (buy_company.value == "엔터") {
            buy_total = price_enter;
        }
        else if (buy_company.value == "식품") {
            buy_total = price_shikpoom;
        }
        else if (buy_company.value == "건설") {
            buy_total = price_gunsul;
        }
        else if (buy_company.value == "게임") {
            buy_total = price_game;
        }
        else if (buy_company.value == "제약") {
            buy_total = price_jaeyak;
        }
        else if (buy_company.value == "IT") {
            buy_total = price_it;
        }
        else {
            buy_total = price_joongongup;
        }
    
        buy_total *= buy_number.value;
    
        if (buy_total > money) {
            buy_alert.style.display = "block";
            buy_number.value = 0;
            setTimeout(function(){
                buy_alert.style.display = "none";
            }, 1500);
        }
        else {
            const result = confirm(buy_company.value+" "+buy_number.value+"주 "+buy_total.toLocaleString()+"원, 매수를 진행하시겠습니까?");
            if (result) {
                alert("완료");
                money -= buy_total;
                money_text.innerText = money.toLocaleString();

                if (buy_company.value == "전자") {
                    have_jeonja += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "전자") {
                        have.innerText = have_jeonja;
                    }
                }
                else if (buy_company.value == "항공우주") {
                    have_hangonguju += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "항공우주") {
                        have.innerText = have_hangonguju;
                    }
                }
                else if (buy_company.value == "차") {
                    have_cha += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "차") {
                        have.innerText = have_cha;
                    }
                }
                else if (buy_company.value == "엔터") {
                    have_enter += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "엔터") {
                        have.innerText = have_enter;
                    }
                }
                else if (buy_company.value == "식품") {
                    have_shikpoom += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "식품") {
                        have.innerText = have_shikpoom;
                    }
                }
                else if (buy_company.value == "건설") {
                    have_gunsul += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "건설") {
                        have.innerText = have_gunsul;
                    }
                }
                else if (buy_company.value == "게임") {
                    have_game += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "게임") {
                        have.innerText = have_game;
                    }
                }
                else if (buy_company.value == "제약") {
                    have_jaeyak += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "제약") {
                        have.innerText = have_jaeyak;
                    }
                }
                else if (buy_company.value == "IT") {
                    have_it += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "IT") {
                        have.innerText = have_it;
                    }
                }
                else {
                    have_joongongup += parseInt(buy_number.value);
                    buy_number.value = 0;
                    if (have_select.value == "중공업") {
                        have.innerText = have_joongongup;
                    }
                }
            }
        }
    }
}

function sell_change() {
    const sell_number = document.getElementById("sell_number");
    let sell_max = 0;

    if (sell_company.value == "전자") {
        sell_max = have_jeonja;
    }
    else if (sell_company.value == "항공우주") {
        sell_max = have_hangonguju;
    }
    else if (sell_company.value == "차") {
        sell_max = have_cha;
    }
    else if (sell_company.value == "엔터") {
        sell_max = have_enter;
    }
    else if (sell_company.value == "식품") {
        sell_max = have_shikpoom;
    }
    else if (sell_company.value == "건설") {
        sell_max = have_gunsul;
    }
    else if (sell_company.value == "게임") {
        sell_max = have_game;
    }
    else if (sell_company.value == "제약") {
        sell_max = have_jaeyak;
    }
    else if (sell_company.value == "IT") {
        sell_max = have_it;
    }
    else {
        sell_max = have_joongongup;
    }

    if (sell_number.value < 0) {
        sell_number.value = 0;
    }
    if (sell_number.value > sell_max) {
        sell_number.value = sell_max;
    }
    else {
        buy_number.value = Math.floor(buy_number.value);
    }
}

function sell() {
    const sell_company = document.getElementById("sell_company");
    const sell_number = document.getElementById("sell_number");
    const money_text = document.getElementById("money");
    const have_select = document.getElementById("have_select");
    const have = document.getElementById("have");
    let sell_total = 0

    if (sell_number.value > 0) {
        if (sell_company.value == "전자") {
            sell_total = price_jeonja;
        }
        else if (sell_company.value == "항공우주") {
            sell_total = price_hangonguju;
        }
        else if (sell_company.value == "차") {
            sell_total = price_cha;
        }
        else if (sell_company.value == "엔터") {
            sell_total = price_enter;
        }
        else if (sell_company.value == "식품") {
            sell_total = price_shikpoom;
        }
        else if (sell_company.value == "건설") {
            sell_total = price_gunsul;
        }
        else if (sell_company.value == "게임") {
            sell_total = price_game;
        }
        else if (sell_company.value == "제약") {
            sell_total = price_jaeyak;
        }
        else if (sell_company.value == "IT") {
            sell_total = price_it;
        }
        else {
            sell_total = price_joongongup;
        }
    
        sell_total *= sell_number.value;
    
        const result = confirm(sell_company.value+" "+sell_number.value+"주 "+sell_total.toLocaleString()+"원, 매도를 진행하시겠습니까?");
        
        if (result) {
            alert("완료");
            money += sell_total;
            money_text.innerText = money.toLocaleString();

            if (sell_company.value == "전자") {
                have_jeonja -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "전자") {
                    have.innerText = have_jeonja;
                }
            }
            else if (buy_company.value == "항공우주") {
                sell_hangonguju -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "항공우주") {
                    have.innerText = have_hangonguju;
                }
            }
            else if (sell_company.value == "차") {
                have_cha -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "차") {
                    have.innerText = have_cha;
                }
            }
            else if (sell_company.value == "엔터") {
                have_enter -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "엔터") {
                    have.innerText = have_enter;
                }
            }
            else if (sell_company.value == "식품") {
                have_shikpoom -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "식품") {
                    have.innerText = have_shikpoom;
                }
            }
            else if (sell_company.value == "건설") {
                have_gunsul -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "건설") {
                    have.innerText = have_gunsul;
                }
            }
            else if (sell_company.value == "게임") {
                have_game -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "게임") {
                    have.innerText = have_game;
                }
            }
            else if (sell_company.value == "제약") {
                have_jaeyak -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "제약") {
                    have.innerText = have_jaeyak;
                }
            }
            else if (sell_company.value == "IT") {
                have_it -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "IT") {
                    have.innerText = have_it;
                }
            }
            else {
                have_joongongup -= parseInt(sell_number.value);
                sell_number.value = 0;
                if (have_select.value == "중공업") {
                    have.innerText = have_joongongup;
                }
            }
        }
    }
}

const news_week_2 = document.getElementById("news_week_2");
const news_week_3 = document.getElementById("news_week_3");
const news_week_4 = document.getElementById("news_week_4");
const news_week_5 = document.getElementById("news_week_5");
const news_week_6 = document.getElementById("news_week_6");
const news_week_7 = document.getElementById("news_week_7");
const news_week_8 = document.getElementById("news_week_8");

function next_week() {
    var market_week = document.getElementById("market_week");
    var news_week = document.getElementById("news_week");
    const button = document.getElementById("button_nextweek");
    
    if (button.innerText == "종료") {
        const result_end = confirm("게임을 종료하시겠습니까?");
    
        if (result_end) {
            alert("결과를 산출합니다.");

            localStorage.setItem("money", money);

            location.href = "finish.html";
        }
    }
    
    else {
        if (week != 8) {
            const result_next = confirm("다음 주차로 넘어가시겠습니까?");
            if (result_next) {
                week += 1;
    
                setTimeout(function(){
                    alert(week+"주차... 뉴스 및 그래프가 업데이트 되었습니다.");
                }, 300)
        
                market_week.innerText = "주식거래소-"+week+"주차";
                news_week.innerText = "뉴스-"+week+"주차";

                if (story == 1) {
                    if (week == 2) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += (price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100));
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_cha += price_cha * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_gunsul += price_gunsul * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        price_it += price_it * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_2.style.display = "block";
                    }
                    else if (week == 3) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_enter += price_enter * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_3.style.display = "block";
                    }
                    else if (week == 4) {
                        price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_it += price_it * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        price_joongongup += price_joongongup * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                    
                        news_week_4.style.display = "block";
                    }
                    else if (week == 5) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_cha += price_cha * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_5.style.display = "block";
                    }
                    else if (week == 6) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_enter += price_enter * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                    
                        news_week_6.style.display = "block";
                    }
                    else if (week == 7) {
                        if (vote == 1) {
                            price_jeonja += price_jeonja * 0.2;
                            price_hangonguju += price_hangonguju * 0.22;
                            price_cha += price_cha * (-0.2);
                            price_enter += price_enter * (-0.22);
                            price_shikpoom += price_shikpoom * (-0.18);
                            price_gunsul += price_gunsul * (-0.19);
                            price_game += price_game * 0.18;
                            price_jaeyak += price_jaeyak * (-0.23);
                            price_it += price_it * 0.19;
                            price_joongongup += price_joongongup * 0.23;
                        }
                        else {
                            price_jeonja += price_jeonja * (-0.2);
                            price_hangonguju += price_hangonguju * (-0.22);
                            price_cha += price_cha * 0.2;
                            price_enter += price_enter * 0.22;
                            price_shikpoom += price_shikpoom * 0.18;
                            price_gunsul += price_gunsul * 0.19;
                            price_game += price_game * (-0.18);
                            price_jaeyak += price_jaeyak * 0.23;
                            price_it += price_it * (-0.19);
                            price_joongongup += price_joongongup * (-0.23);
                        }
                        news_week_7.style.display = "block";
                    }
                    else if (week == 8) {
                        if (vote == 1) {
                            price_jeonja += price_jeonja * 0.3;
                            price_hangonguju += price_hangonguju * 0.29;
                            price_cha += price_cha * (-0.3);
                            price_enter += price_enter * (-0.29);
                            price_shikpoom += price_shikpoom * (-0.33);
                            price_gunsul += price_gunsul * (-0.3);
                            price_game += price_game * 0.33;
                            price_jaeyak += price_jaeyak * (-0.26);
                            price_it += price_it * 0.3;
                            price_joongongup += price_joongongup * 0.26;
                        }
                        else {
                            price_jeonja += price_jeonja * (-0.3);
                            price_hangonguju += price_hangonguju * (-0.29);
                            price_cha += price_cha * 0.3;
                            price_enter += price_enter * 0.29;
                            price_shikpoom += price_shikpoom * 0.33;
                            price_gunsul += price_gunsul * 0.3;
                            price_game += price_game * (-0.33);
                            price_jaeyak += price_jaeyak * 0.26;
                            price_it += price_it * (-0.3);
                            price_joongongup += price_joongongup * (-0.26);
                        }
                        news_week_8.style.display = "block";
                    }
                }
                else if (story == 2) {
                    if (week == 2) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_cha += price_cha * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_gunsul += price_gunsul * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        price_it += price_it * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_2.style.display = "block";
                    }
                    else if (week == 3) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_enter += price_enter * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_3.style.display = "block";
                    }
                    else if (week == 4) {
                        price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_it += price_it * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        price_joongongup += price_joongongup * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                    
                        news_week_4.style.display = "block";
                    }
                    else if (week == 5) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_cha += price_cha * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_5.style.display = "block";
                    }
                    else if (week == 6) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_enter += price_enter * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                    
                        news_week_6.style.display = "block";
                    }
                    else if (week == 7) {
                        if (vote == 1) {
                            price_jeonja += price_jeonja * 0.2;
                            price_hangonguju += price_hangonguju * 0.22;
                            price_cha += price_cha * (-0.2);
                            price_enter += price_enter * (-0.22);
                            price_shikpoom += price_shikpoom * (-0.18);
                            price_gunsul += price_gunsul * (-0.19);
                            price_game += price_game * 0.18;
                            price_jaeyak += price_jaeyak * (-0.23);
                            price_it += price_it * 0.19;
                            price_joongongup += price_joongongup * 0.23;
                        }
                        else {
                            price_jeonja += price_jeonja * (-0.2);
                            price_hangonguju += price_hangonguju * (-0.22);
                            price_cha += price_cha * 0.2;
                            price_enter += price_enter * 0.22;
                            price_shikpoom += price_shikpoom * 0.18;
                            price_gunsul += price_gunsul * 0.19;
                            price_game += price_game * (-0.18);
                            price_jaeyak += price_jaeyak * 0.23;
                            price_it += price_it * (-0.19);
                            price_joongongup += price_joongongup * (-0.23);
                        }
                        news_week_7.style.display = "block";
                    }
                    else if (week == 8) {
                        if (vote == 1) {
                            price_jeonja += price_jeonja * 0.3;
                            price_hangonguju += price_hangonguju * 0.29;
                            price_cha += price_cha * (-0.3);
                            price_enter += price_enter * (-0.29);
                            price_shikpoom += price_shikpoom * (-0.33);
                            price_gunsul += price_gunsul * (-0.3);
                            price_game += price_game * 0.33;
                            price_jaeyak += price_jaeyak * (-0.26);
                            price_it += price_it * 0.3;
                            price_joongongup += price_joongongup * 0.26;
                        }
                        else {
                            price_jeonja += price_jeonja * (-0.3);
                            price_hangonguju += price_hangonguju * (-0.29);
                            price_cha += price_cha * 0.3;
                            price_enter += price_enter * 0.29;
                            price_shikpoom += price_shikpoom * 0.33;
                            price_gunsul += price_gunsul * 0.3;
                            price_game += price_game * (-0.33);
                            price_jaeyak += price_jaeyak * 0.26;
                            price_it += price_it * (-0.3);
                            price_joongongup += price_joongongup * (-0.26);
                        }
                        news_week_8.style.display = "block";
                    }
                }
                else if (story == 3) {
                    if (week == 2) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_cha += price_cha * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_gunsul += price_gunsul * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        price_it += price_it * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_2.style.display = "block";
                    }
                    else if (week == 3) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_enter += price_enter * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_3.style.display = "block";
                    }
                    else if (week == 4) {
                        price_jeonja += price_jeonja * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_gunsul += price_gunsul * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_it += price_it * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        price_joongongup += price_joongongup * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                    
                        news_week_4.style.display = "block";
                    }
                    else if (week == 5) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_cha += price_cha * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_5.style.display = "block";
                    }
                    else if (week == 6) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_enter += price_enter * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                    
                        news_week_6.style.display = "block";
                    }
                    else if (week == 7) {
                        if (vote == 1) {
                            price_jeonja += price_jeonja * 0.2;
                            price_hangonguju += price_hangonguju * 0.22;
                            price_cha += price_cha * (-0.2);
                            price_enter += price_enter * (-0.22);
                            price_shikpoom += price_shikpoom * (-0.18);
                            price_gunsul += price_gunsul * (-0.19);
                            price_game += price_game * 0.18;
                            price_jaeyak += price_jaeyak * (-0.23);
                            price_it += price_it * 0.19;
                            price_joongongup += price_joongongup * 0.23;
                        }
                        else {
                            price_jeonja += price_jeonja * (-0.2);
                            price_hangonguju += price_hangonguju * (-0.22);
                            price_cha += price_cha * 0.2;
                            price_enter += price_enter * 0.22;
                            price_shikpoom += price_shikpoom * 0.18;
                            price_gunsul += price_gunsul * 0.19;
                            price_game += price_game * (-0.18);
                            price_jaeyak += price_jaeyak * 0.23;
                            price_it += price_it * (-0.19);
                            price_joongongup += price_joongongup * (-0.23);
                        }
                        news_week_7.style.display = "block";
                    }
                    else if (week == 8) {
                        if (vote == 1) {
                            price_jeonja += price_jeonja * 0.3;
                            price_hangonguju += price_hangonguju * 0.29;
                            price_cha += price_cha * (-0.3);
                            price_enter += price_enter * (-0.29);
                            price_shikpoom += price_shikpoom * (-0.33);
                            price_gunsul += price_gunsul * (-0.3);
                            price_game += price_game * 0.33;
                            price_jaeyak += price_jaeyak * (-0.26);
                            price_it += price_it * 0.3;
                            price_joongongup += price_joongongup * 0.26;
                        }
                        else {
                            price_jeonja += price_jeonja * (-0.3);
                            price_hangonguju += price_hangonguju * (-0.29);
                            price_cha += price_cha * 0.3;
                            price_enter += price_enter * 0.29;
                            price_shikpoom += price_shikpoom * 0.33;
                            price_gunsul += price_gunsul * 0.3;
                            price_game += price_game * (-0.33);
                            price_jaeyak += price_jaeyak * 0.26;
                            price_it += price_it * (-0.3);
                            price_joongongup += price_joongongup * (-0.26);
                        }
                        news_week_8.style.display = "block";
                    }
                }
                else {
                    if (week == 2) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_cha += price_cha * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_gunsul += price_gunsul * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        price_it += price_it * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_2.style.display = "block";
                    }
                    else if (week == 3) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_enter += price_enter * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_3.style.display = "block";
                    }
                    else if (week == 4) {
                        price_jeonja += price_jeonja * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_gunsul += price_gunsul * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_it += price_it * (Math.round((Math.random()*(-0.05)+0.3)*100) / 100);
                        price_joongongup += price_joongongup * (Math.round((Math.random()*0.05+0.3)*100) / 100);
                    
                        news_week_4.style.display = "block";
                    }
                    else if (week == 5) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_hangonguju += price_hangonguju * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_cha += price_cha * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_enter += price_enter * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_enter += price_enter * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_game += price_game * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_game += price_game * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_joongongup += price_joongongup * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }

                        news_week_5.style.display = "block";
                    }
                    else if (week == 6) {
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jeonja += price_jeonja * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_hangonguju += price_hangonguju * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_cha += price_cha * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_cha += price_cha * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_enter += price_enter * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_shikpoom += price_shikpoom * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_gunsul += price_gunsul * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_game += price_game * (Math.round((Math.random()*0.05-0.3)*100) / 100);
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_jaeyak += price_jaeyak * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        var ran = Math.round(Math.random()+1);
                        if (ran == 1) {
                            price_it += price_it * (Math.round((Math.random()*(-0.15)-0.1)*100) / 100);
                        }
                        else {
                            price_it += price_it * (Math.round((Math.random()*0.15+0.1)*100) / 100);
                        }
                        price_joongongup += price_joongongup * (Math.round((Math.random()*(-0.05)-0.3)*100) / 100);
                    
                        news_week_6.style.display = "block";
                    }
                    else if (week == 7) {
                        if (vote == 1) {
                            price_jeonja += price_jeonja * 0.2;
                            price_hangonguju += price_hangonguju * 0.22;
                            price_cha += price_cha * (-0.2);
                            price_enter += price_enter * (-0.22);
                            price_shikpoom += price_shikpoom * (-0.18);
                            price_gunsul += price_gunsul * (-0.19);
                            price_game += price_game * 0.18;
                            price_jaeyak += price_jaeyak * (-0.23);
                            price_it += price_it * 0.19;
                            price_joongongup += price_joongongup * 0.23;
                        }
                        else {
                            price_jeonja += price_jeonja * (-0.2);
                            price_hangonguju += price_hangonguju * (-0.22);
                            price_cha += price_cha * 0.2;
                            price_enter += price_enter * 0.22;
                            price_shikpoom += price_shikpoom * 0.18;
                            price_gunsul += price_gunsul * 0.19;
                            price_game += price_game * (-0.18);
                            price_jaeyak += price_jaeyak * 0.23;
                            price_it += price_it * (-0.19);
                            price_joongongup += price_joongongup * (-0.23);
                        }
                        news_week_7.style.display = "block";
                    }
                    else if (week == 8) {
                        if (vote == 1) {
                            price_jeonja += price_jeonja * 0.3;
                            price_hangonguju += price_hangonguju * 0.29;
                            price_cha += price_cha * (-0.3);
                            price_enter += price_enter * (-0.29);
                            price_shikpoom += price_shikpoom * (-0.33);
                            price_gunsul += price_gunsul * (-0.3);
                            price_game += price_game * 0.33;
                            price_jaeyak += price_jaeyak * (-0.26);
                            price_it += price_it * 0.3;
                            price_joongongup += price_joongongup * 0.26;
                        }
                        else {
                            price_jeonja += price_jeonja * (-0.3);
                            price_hangonguju += price_hangonguju * (-0.29);
                            price_cha += price_cha * 0.3;
                            price_enter += price_enter * 0.29;
                            price_shikpoom += price_shikpoom * 0.33;
                            price_gunsul += price_gunsul * 0.3;
                            price_game += price_game * (-0.33);
                            price_jaeyak += price_jaeyak * 0.26;
                            price_it += price_it * (-0.3);
                            price_joongongup += price_joongongup * (-0.26);
                        }
                        news_week_8.style.display = "block";
                    }
                }

                price_jeonja = Math.floor(price_jeonja);
                price_hangonguju = Math.floor(price_hangonguju);
                price_cha = Math.floor(price_cha);
                price_enter = Math.floor(price_enter);
                price_shikpoom = Math.floor(price_shikpoom);
                price_gunsul = Math.floor(price_gunsul);
                price_game = Math.floor(price_game);
                price_jaeyak = Math.floor(price_jaeyak);
                price_it = Math.floor(price_it);
                price_joongongup = Math.floor(price_joongongup);
        
                const dataset_jeonja = jeonja_data.data.datasets;
                const data_jeonja = dataset_jeonja[0].data;
                const dataset_hangonguju = hangonguju_data.data.datasets;
                const data_hangonguju = dataset_hangonguju[0].data;
                const dataset_cha = cha_data.data.datasets;
                const data_cha = dataset_cha[0].data;
                const dataset_enter = enter_data.data.datasets;
                const data_enter = dataset_enter[0].data;
                const dataset_shikpoom = shikpoom_data.data.datasets;
                const data_shikpoom = dataset_shikpoom[0].data;
                const dataset_gunsul = gunsul_data.data.datasets;
                const data_gunsul = dataset_gunsul[0].data;
                const dataset_game = game_data.data.datasets;
                const data_game = dataset_game[0].data;
                const dataset_jaeyak = jaeyak_data.data.datasets;
                const data_jaeyak = dataset_jaeyak[0].data;
                const dataset_it = it_data.data.datasets;
                const data_it = dataset_it[0].data;
                const dataset_joongongup = joongongup_data.data.datasets;
                const data_joongongup = dataset_joongongup[0].data;
        
                data_jeonja[week-1] = Math.floor(price_jeonja/100)*100;
                chart_jeonja.update();

                data_hangonguju[week-1] = Math.floor(price_hangonguju/100)*100;
                chart_hangonguju.update();

                data_cha[week-1] = Math.floor(price_cha/100)*100;
                chart_cha.update();

                data_enter[week-1] = Math.floor(price_enter/100)*100;
                chart_enter.update();

                data_shikpoom[week-1] = Math.floor(price_shikpoom/100)*100;
                chart_shikpoom.update();

                data_gunsul[week-1] = Math.floor(price_gunsul/100)*100;
                chart_gunsul.update();

                data_game[week-1] = Math.floor(price_game/100)*100;
                chart_game.update();

                data_jaeyak[week-1] = Math.floor(price_jaeyak/100)*100;
                chart_jaeyak.update();

                data_it[week-1] = Math.floor(price_it/100)*100;
                chart_it.update();

                data_joongongup[week-1] = Math.floor(price_joongongup/100)*100;
                chart_joongongup.update();
        
                if (week == 8) {
                    button.innerText = "종료"
                }
            }
        }
        else {
            alert("현재는 8주차, 마지막 주차입니다.");
        }
    }
}