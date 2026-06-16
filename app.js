const FACTIONS = [
    "Space Marines", "Black Templars", "Blood Angels", "Dark Angels", "Space Wolves",
    "Deathwatch", "Grey Knights", "Imperial Agents", "Astra Militarum", "Adepta Sororitas",
    "Adeptus Custodes", "Adeptus Mechanicus", "Imperial Knights", "Chaos Space Marines",
    "World Eaters", "Thousand Sons", "Death Guard", "Emperor's Children", "Chaos Daemons",
    "Chaos Knights", "Tyranids", "Genestealer Cults", "Aeldari", "Drukhari", "Necrons",
    "Orks", "T'au Empire", "Leagues of Votann"
];

const DISPOSITIONS = [
    { key: 'take_and_hold',   label: 'Take and Hold',   abbr: 'T&H',  color: '#3b82f6' },
    { key: 'purge_the_foe',   label: 'Purge the Foe',   abbr: 'PtF',  color: '#ef4444' },
    { key: 'disruption',      label: 'Disruption',       abbr: 'Dis',  color: '#8b5cf6' },
    { key: 'reconnaissance',  label: 'Reconnaissance',   abbr: 'Rec',  color: '#22c55e' },
    { key: 'priority_assets', label: 'Priority Assets',  abbr: 'PA',   color: '#f59e0b' },
];

const MISSION_TABLE = {
    "take_and_hold": {
        "take_and_hold":   { "mission": "Battlefield Dominance",                       "isAsymmetric": false,                                                                       "mapFile": "battlefield-dominance" },
        "purge_the_foe":   { "mission": "Immovable Object vs Unstoppable Force",         "isAsymmetric": true,  "playerObj": "Immovable Object",       "oppObj": "Unstoppable Force",       "mapFile": "immovable-object-unstoppable-force" },
        "disruption":      { "mission": "Punishment vs Delaying Action",                "isAsymmetric": true,  "playerObj": "Delaying Action",        "oppObj": "Punishment",              "mapFile": "punishment-delaying-action" },
        "reconnaissance":  { "mission": "Purge & Secure vs Reconnaissance Sweep",       "isAsymmetric": true,  "playerObj": "Purge & Secure",         "oppObj": "Reconnaissance Sweep",    "mapFile": "purge-secure-recon-sweep" },
        "priority_assets": { "mission": "Inescapable Dominion vs Secure Asset",         "isAsymmetric": true,  "playerObj": "Inescapable Dominion",   "oppObj": "Secure Asset",            "mapFile": "inescapable-dominion-secure-asset" }
    },
    "purge_the_foe": {
        "take_and_hold":   { "mission": "Immovable Object vs Unstoppable Force",         "isAsymmetric": true,  "playerObj": "Unstoppable Force",      "oppObj": "Immovable Object",        "mapFile": "immovable-object-unstoppable-force" },
        "purge_the_foe":   { "mission": "Meatgrinder",                                  "isAsymmetric": false,                                                                       "mapFile": "meatgrinder" },
        "disruption":      { "mission": "Destroyer's Wrath vs Vital Link",              "isAsymmetric": true,  "playerObj": "Destroyer's Wrath",     "oppObj": "Vital Link",              "mapFile": "destroyers-wrath-vital-link" },
        "reconnaissance":  { "mission": "Smoke & Mirrors vs Surveil the Foe",           "isAsymmetric": true,  "playerObj": "Smoke and Mirrors",     "oppObj": "Surveil the Foe",         "mapFile": "smoke-mirrors-surveil-foe" },
        "priority_assets": { "mission": "Determined Acquisition vs Death Trap",         "isAsymmetric": true,  "playerObj": "Death Trap",             "oppObj": "Determined Acquisition",  "mapFile": "determined-acquisition-death-trap" }
    },
    "disruption": {
        "take_and_hold":   { "mission": "Punishment vs Delaying Action",                "isAsymmetric": true,  "playerObj": "Punishment",             "oppObj": "Delaying Action",         "mapFile": "punishment-delaying-action" },
        "purge_the_foe":   { "mission": "Destroyer's Wrath vs Vital Link",              "isAsymmetric": true,  "playerObj": "Vital Link",             "oppObj": "Destroyer's Wrath",       "mapFile": "destroyers-wrath-vital-link" },
        "disruption":      { "mission": "Sabotage",                                    "isAsymmetric": false,                                                                       "mapFile": "sabotage" },
        "reconnaissance":  { "mission": "Search & Scour vs Vanguard Operation",         "isAsymmetric": true,  "playerObj": "Search and Scour",      "oppObj": "Vanguard Operation",      "mapFile": "search-scour-vanguard-operation" },
        "priority_assets": { "mission": "Locate & Deny vs Extract the Relic",           "isAsymmetric": true,  "playerObj": "Locate and Deny",        "oppObj": "Extract Relic",           "mapFile": "locate-deny-extract-relic" }
    },
    "reconnaissance": {
        "take_and_hold":   { "mission": "Purge & Secure vs Reconnaissance Sweep",       "isAsymmetric": true,  "playerObj": "Reconnaissance Sweep",   "oppObj": "Purge & Secure",          "mapFile": "purge-secure-recon-sweep" },
        "purge_the_foe":   { "mission": "Smoke & Mirrors vs Surveil the Foe",           "isAsymmetric": true,  "playerObj": "Surveil the Foe",        "oppObj": "Smoke and Mirrors",       "mapFile": "smoke-mirrors-surveil-foe" },
        "disruption":      { "mission": "Search & Scour vs Vanguard Operation",         "isAsymmetric": true,  "playerObj": "Vanguard Operation",     "oppObj": "Search and Scour",        "mapFile": "search-scour-vanguard-operation" },
        "reconnaissance":  { "mission": "Gather Intel",                                "isAsymmetric": false,                                                                       "mapFile": "gather-intel" },
        "priority_assets": { "mission": "Outmanoeuvre",                                "isAsymmetric": false,                                                                       "mapFile": "outmanoeuvre" }
    },
    "priority_assets": {
        "take_and_hold":   { "mission": "Inescapable Dominion vs Secure Asset",         "isAsymmetric": true,  "playerObj": "Secure Asset",           "oppObj": "Inescapable Dominion",    "mapFile": "inescapable-dominion-secure-asset" },
        "purge_the_foe":   { "mission": "Determined Acquisition vs Death Trap",         "isAsymmetric": true,  "playerObj": "Determined Acquisition", "oppObj": "Death Trap",              "mapFile": "determined-acquisition-death-trap" },
        "disruption":      { "mission": "Locate & Deny vs Extract the Relic",           "isAsymmetric": true,  "playerObj": "Extract Relic",          "oppObj": "Locate and Deny",         "mapFile": "locate-deny-extract-relic" },
        "reconnaissance":  { "mission": "Outmanoeuvre",                                "isAsymmetric": false,                                                                       "mapFile": "outmanoeuvre" },
        "priority_assets": { "mission": "Consecrate vs Triangulation",                 "isAsymmetric": true,  "playerObj": "Consecrate",             "oppObj": "Triangulation",           "mapFile": "consecrate-triangulation" }
    }
};

// --- MISSION DESCRIPTIONS ---

const MISSIONS_DATA = [
    {
        "id": "battlefield_dominance", "mission_name": "Battlefield Dominance",
        "scoring_rules": [
            { "condition": "Control more objectives than the enemy (Rounds 1-2)", "vp": 3 },
            { "condition": "Control each objective marker (Rounds 2-5)", "vp": 3 },
            { "condition": "Bonus for each controlled objective outside your deployment zone (Rounds 2-5)", "vp": 2 }
        ]
    },
    {
        "id": "determined_acquisition", "mission_name": "Determined Acquisition",
        "scoring_rules": [
            { "condition": "Control an objective marker you did not control at the start of your turn, excluding home zone (Rounds 1-5)", "vp": 2 },
            { "condition": "Control each objective marker (Rounds 2-5)", "vp": 3 },
            { "condition": "Bonus for each objective controlled entirely within the enemy's half of the battlefield (Rounds 2-5)", "vp": 3 }
        ]
    },
    {
        "id": "immovable_object", "mission_name": "Immovable Object",
        "scoring_rules": [
            { "condition": "Control one or more central objective markers at the end of any turn (Rounds 1-5)", "vp": 3 },
            { "condition": "Control each objective marker outside your home zone, scored at end of Command Phase (Rounds 2-4)", "vp": 5 },
            { "condition": "Control each objective marker outside your home zone, scored at end of Player Turn (Round 5)", "vp": 5 }
        ]
    },
    {
        "id": "inescapable_dominion", "mission_name": "Inescapable Dominion",
        "scoring_rules": [
            { "condition": "Control 2 or more objective markers (Rounds 2-5)", "vp": 5 },
            { "condition": "Control 3 or more objective markers simultaneously (Rounds 1-5)", "vp": 4 },
            { "condition": "Control more objective markers than your opponent (Rounds 2-5)", "vp": 4 },
            { "condition": "End Game: Control the enemy's home objective marker at the end of the battle", "vp": 5 }
        ]
    },
    {
        "id": "purge_and_secure", "mission_name": "Purge & Secure",
        "scoring_rules": [
            { "condition": "Destroy an enemy unit while your unit is on an objective OR destroy an enemy unit that is standing on an objective (Rounds 1-5)", "vp": 3 },
            { "condition": "Control each objective marker outside your home deployment zone (Rounds 2-5)", "vp": 4 },
            { "condition": "Control more objective markers than you started the turn with (Rounds 2-5)", "vp": 3 }
        ]
    },
    {
        "id": "death_trap", "mission_name": "Death Trap",
        "scoring_rules": [
            { "condition": "Action: Booby trap a nearby objective footprint or area terrain feature", "vp": 2 },
            { "condition": "Bonus if the booby-trapped terrain contains an objective marker", "vp": 2 },
            { "condition": "Destroy an enemy unit that started its turn inside a trapped terrain feature", "vp": 3 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 }
        ]
    },
    {
        "id": "outmanoeuvre", "mission_name": "Outmanoeuvre",
        "scoring_rules": [
            { "condition": "Control each objective marker outside your home zone, per objective (Round 1)", "vp": 4 },
            { "condition": "Control each objective marker, per objective (Rounds 2-3)", "vp": 5 },
            { "condition": "Control each objective marker, per objective (Round 4)", "vp": 6 },
            { "condition": "End Game: Control the enemy's home objective marker at the end of the battle", "vp": 10 }
        ]
    },
    {
        "id": "delaying_action", "mission_name": "Delaying Action",
        "scoring_rules": [
            { "condition": "Destroy an enemy unit, repeatable (Rounds 1-5)", "vp": 2 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Control a central objective AND an expansion objective simultaneously (Rounds 2-5)", "vp": 3 }
        ]
    },
    {
        "id": "locate_and_deny", "mission_name": "Locate and Deny",
        "scoring_rules": [
            { "condition": "Action: Sensor sweep to remove enemy operation markers", "vp": 4 },
            { "condition": "Destroy an enemy unit that is currently occupying an objective marker", "vp": 4 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "End Game: End the battle controlling the final remaining marked objective entirely clear of enemy models", "vp": 5 }
        ]
    },
    {
        "id": "smoke_and_mirrors", "mission_name": "Smoke and Mirrors",
        "scoring_rules": [
            { "condition": "Action: Deploy a decoy marker on an objective you control", "vp": 2 },
            { "condition": "Bonus if the decoyed objective is wholly within the enemy's territory", "vp": 2 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "End Game: End the battle with valid decoys deployed across 4 separate objective markers", "vp": 10 }
        ]
    },
    {
        "id": "unstoppable_force", "mission_name": "Unstoppable Force",
        "scoring_rules": [
            { "condition": "Destroy one or more enemy units during this turn (Rounds 1-5)", "vp": 3 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Control more objective markers at the end of the turn than you started the turn with (Rounds 2-5)", "vp": 3 },
            { "condition": "End Game: Control a central objective marker at the end of the game", "vp": 5 }
        ]
    },
    {
        "id": "punishment", "mission_name": "Punishment",
        "scoring_rules": [
            { "condition": "Condemn 1-3 enemy targets at start of turn; destroy a Condemned enemy unit, max once per turn (Rounds 1-5)", "vp": 3 },
            { "condition": "Bonus if the destroyed Condemned unit was occupying an objective marker", "vp": 2 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Control more objective markers than your opponent (Rounds 2-5)", "vp": 5 },
            { "condition": "End Game: Control the enemy's home objective marker at the end of the battle", "vp": 8 }
        ]
    },
    {
        "id": "meatgrinder", "mission_name": "Meatgrinder",
        "scoring_rules": [
            { "condition": "Destroy one or more enemy units during this turn (Rounds 1-5)", "vp": 3 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "End the turn having destroyed more total enemy units than friendly units lost (Rounds 2-5)", "vp": 4 },
            { "condition": "Control the enemy's home objective marker at the end of your turn (Rounds 2-5)", "vp": 5 }
        ]
    },
    {
        "id": "destroyers_wrath", "mission_name": "Destroyer's Wrath",
        "scoring_rules": [
            { "condition": "Destroy one or more enemy units during this turn (Rounds 1-5)", "vp": 3 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Control more total objective markers than your opponent (Rounds 2-5)", "vp": 4 },
            { "condition": "End the turn having destroyed more total enemy units than friendly units lost (Rounds 2-5)", "vp": 5 }
        ]
    },
    {
        "id": "consecrate", "mission_name": "Consecrate",
        "scoring_rules": [
            { "condition": "Destroy an enemy unit and use the killing friendly unit to consecrate a nearby non-home objective", "vp": 3 },
            { "condition": "Consecrate 3 separate objective markers simultaneously over the course of the game", "vp": 6 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Control more total objective markers than your opponent (Rounds 2-5)", "vp": 4 },
            { "condition": "End Game: End the battle with the enemy's home objective marker successfully consecrated", "vp": 5 }
        ]
    },
    {
        "id": "secure_asset", "mission_name": "Secure Asset",
        "scoring_rules": [
            { "condition": "Action: Successfully complete the Secure Asset action on a controlled objective marker", "vp": 4 },
            { "condition": "Destroy an enemy unit within range of any central objective marker (Rounds 1-5)", "vp": 2 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Control at least three objective markers simultaneously (Rounds 2-5)", "vp": 4 }
        ]
    },
    {
        "id": "extract_relic", "mission_name": "Extract Relic",
        "scoring_rules": [
            { "condition": "Action: Control a central objective and complete a sensor sweep to strip an enemy marker", "vp": 4 },
            { "condition": "Destroy an enemy unit that began its turn occupying any objective marker (Rounds 1-5)", "vp": 3 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "End Game: End the game holding the final remaining marked objective entirely clear of enemy units", "vp": 5 }
        ]
    },
    {
        "id": "vital_link", "mission_name": "Vital Link",
        "scoring_rules": [
            { "condition": "Control a central objective marker (Rounds 1-5)", "vp": 2 },
            { "condition": "Action: Bonus score for each central objective marker you have successfully marked", "vp": 1 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Bonus for holding an active, actioned central objective marker (Rounds 2-5)", "vp": 4 },
            { "condition": "End Game: Control the enemy's home objective marker at the end of the battle", "vp": 10 }
        ]
    },
    {
        "id": "sabotage", "mission_name": "Sabotage",
        "scoring_rules": [
            { "condition": "Action: Complete a Sabotage action on an objective marker that is not your home objective", "vp": 3 },
            { "condition": "Bonus if the sabotaged objective is completely within the enemy's half of the table", "vp": 2 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 }
        ]
    },
    {
        "id": "vanguard_operation", "mission_name": "Vanguard Operation",
        "scoring_rules": [
            { "condition": "Action: Perform a Vanguard Survey operation on a terrain feature with no enemies nearby", "vp": 4 },
            { "condition": "Destroy an enemy unit during your player turn (Rounds 1-5)", "vp": 2 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "End Game: Control the enemy's home objective marker at the end of the battle", "vp": 10 }
        ]
    },
    {
        "id": "reconnaissance_sweep", "mission_name": "Reconnaissance Sweep",
        "scoring_rules": [
            { "condition": "End turn with friendly units in 3 different table corners and at least 6 inches clear of center (Rounds 1-5)", "vp": 3 },
            { "condition": "End turn with friendly units in all 4 table corners and at least 6 inches clear of center (Rounds 1-5)", "vp": 6 },
            { "condition": "Earn bonus points for each enemy unit destroyed during the battle", "vp": 1 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 3 }
        ]
    },
    {
        "id": "surveil_the_foe", "mission_name": "Surveil the Foe",
        "scoring_rules": [
            { "condition": "Action: Surveil an active enemy unit that is not currently within range of an objective marker with a tracking marker", "vp": 4 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Control more objective markers than your opponent (Rounds 2-5)", "vp": 4 },
            { "condition": "Bonus loop if you end a turn where the enemy has zero markers remaining on the battlefield", "vp": 5 }
        ]
    },
    {
        "id": "triangulation", "mission_name": "Triangulation",
        "scoring_rules": [
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Action: Triangulate a single controlled objective marker during the turn (Rounds 2-5)", "vp": 3 },
            { "condition": "Action: Triangulate two separate controlled objective markers during the turn (Rounds 2-5)", "vp": 6 },
            { "condition": "Action: Triangulate three or more separate controlled objective markers during the turn (Rounds 2-5)", "vp": 10 },
            { "condition": "End Game: Successfully complete triangulation across at least 4 separate objectives over the course of the game", "vp": 10 }
        ]
    },
    {
        "id": "search_and_scour", "mission_name": "Search and Scour",
        "scoring_rules": [
            { "condition": "Control a central objective marker feature (Rounds 1-5)", "vp": 3 },
            { "condition": "Destroy an enemy unit that began the player turn completely inside a piece of terrain (Rounds 1-5)", "vp": 2 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "End Game: Clear your half of the battlefield completely so that no enemy models remain inside your territory", "vp": 5 }
        ]
    },
    {
        "id": "gather_intel", "mission_name": "Gather Intel",
        "scoring_rules": [
            { "condition": "Control a central objective marker feature at the end of the round (Round 1)", "vp": 6 },
            { "condition": "Control each objective marker aside from your home objective (Rounds 2-5)", "vp": 4 },
            { "condition": "Action: Successfully execute an Extract Intel action on a controlled objective marker (Rounds 2-5)", "vp": 6 },
            { "condition": "End Game: Successfully extract intel from at least 3 separate objective markers over the course of the battle", "vp": 5 },
            { "condition": "End Game: Extract intel from an objective marker situated entirely within the enemy's side of the board", "vp": 5 }
        ]
    }
];

function normaliseName(str) {
    return (str || '').toLowerCase()
        .replace(/&/g, 'and')
        .replace(/\bthe\b/g, '')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/ +/g, '_');
}

function findMissionData(objectiveName) {
    if (!objectiveName) return null;
    const query = normaliseName(objectiveName);
    return MISSIONS_DATA.find(m =>
        m.id === query || normaliseName(m.mission_name) === query
    ) || null;
}

function getConditionStyle(condition) {
    if (condition.startsWith('End Game:')) return { color: '#a855f7', icon: '⚑', label: 'End Game' };
    if (condition.startsWith('Action:'))   return { color: '#f59e0b', icon: '⚡', label: 'Action'   };
    return                                        { color: '#3b82f6', icon: '↩', label: 'Per Turn'  };
}

function buildMissionCard(objectiveName, sideLabel) {
    const mData = findMissionData(objectiveName);
    const card  = document.createElement('div');
    card.className = 'mm-card';

    card.innerHTML = `
        <div class="mm-card-header">
            <div class="mm-side-label">${sideLabel}</div>
            <div class="mm-obj-name">${objectiveName}</div>
        </div>
        <div class="mm-conditions" id="mm-cond-placeholder"></div>
        ${!mData ? '<div class="mm-no-data">Mission details not yet available.</div>' : ''}
    `;

    if (mData) {
        const container = card.querySelector('#mm-cond-placeholder');
        container.removeAttribute('id');
        mData.scoring_rules.forEach(c => {
            const cs  = getConditionStyle(c.condition);
            const row = document.createElement('div');
            row.className = 'mm-condition';
            row.innerHTML = `
                <div class="mm-cond-top">
                    <span class="mm-timing" style="color:${cs.color};border-color:${cs.color}40;">${cs.icon} ${cs.label}</span>
                    <span class="mm-vp"     style="background:${cs.color}22;color:${cs.color};">+${c.vp} VP</span>
                </div>
                <div class="mm-cond-desc">${c.condition}</div>
            `;
            container.appendChild(row);
        });
    }

    return card;
}

function openMissionModal(missionTableEntry) {
    const modal = document.getElementById('mission-modal');

    document.getElementById('mm-pairing-name').textContent = missionTableEntry.mission;
    document.getElementById('mm-caps').innerHTML = 'Warhammer Event Companion v1.0';

    const body = document.getElementById('mission-modal-body');
    body.innerHTML = '';

    if (missionTableEntry.isAsymmetric) {
        body.className = 'mm-body mm-body-2col';
        body.appendChild(buildMissionCard(missionTableEntry.playerObj, 'Our Objective'));
        body.appendChild(buildMissionCard(missionTableEntry.oppObj,    'Their Objective'));
    } else {
        body.className = 'mm-body mm-body-1col';
        body.appendChild(buildMissionCard(missionTableEntry.mission, 'Symmetric — Both Sides'));
    }

    modal.style.display = 'flex';
    requestAnimationFrame(() => modal.classList.add('mm-visible'));
}

function closeMissionModal() {
    const modal = document.getElementById('mission-modal');
    modal.classList.remove('mm-visible');
    setTimeout(() => { modal.style.display = 'none'; }, 200);
}

// --- GAME STATE ---

const STEPS = {
    IS_DEF:     0,
    IS_ATK:     1,
    IS_OPP_DEF: 2,
    IS_OPP_ATK: 3,
    IS_OUR_ACC: 4,
    IS_OPP_ACC: 5,
    ME_DEF:     6,
    ME_OPP_DEF: 7,
    ME_OUR_ACC: 8,
    ME_OPP_ACC: 9,
    DONE:       10
};

const STATE = {
    matrix: [],
    ourTeam: [],
    oppTeam: [],
    round: 1,

    step: STEPS.IS_DEF,

    isOurDef:   -1,
    isOurAtks:  [],
    isOppDef:   -1,
    isOppAtks:  [],
    isOurChoiceOppAtk: -1,
    isOppChoiceOurAtk: -1,

    meOurDef:   -1,
    meOurAtks:  [],
    meOppDef:   -1,
    meOppAtks:  [],
    meOurChoiceOppAtk: -1,
    meOppChoiceOurAtk: -1,

    matches: []
};

// cellData[i][j] = { mapScores: [10, 10, 10] }
let cellData = [];

function initCellData() {
    cellData = Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => ({ mapScores: [10, 10, 10] }))
    );
}

function getCellExpectedScore(i, j) {
    const scores = cellData[i][j].mapScores.filter(s => s !== null && !isNaN(s));
    if (scores.length === 0) return 10;
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// --- MINIMAX SOLVER ---

function getScore(ourIdx, oppIdx, defenderSide) {
    const mapScores = cellData[ourIdx][oppIdx].mapScores;
    if (defenderSide === 'our') {
        return Math.max(...mapScores);
    } else if (defenderSide === 'opp') {
        return Math.min(...mapScores);
    } else {
        const mapIdx = (STATE.round - 1) % 3;
        return mapScores[mapIdx];
    }
}

function getPairsFromArray(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
}

function getLockedPlayers(s, team) {
    let locked = [];
    if (team === 'our') {
        if (s.isOurDef !== -1 && s.isOurChoiceOppAtk !== -1) locked.push(s.isOurDef);
        if (s.isOppChoiceOurAtk !== -1) locked.push(s.isOppChoiceOurAtk);
        if (s.meOurDef !== -1 && s.meOurChoiceOppAtk !== -1) locked.push(s.meOurDef);
        if (s.meOppChoiceOurAtk !== -1) locked.push(s.meOppChoiceOurAtk);
    } else {
        if (s.isOppDef !== -1 && s.isOppChoiceOurAtk !== -1) locked.push(s.isOppDef);
        if (s.isOurChoiceOppAtk !== -1) locked.push(s.isOurChoiceOppAtk);
        if (s.meOppDef !== -1 && s.meOppChoiceOurAtk !== -1) locked.push(s.meOppDef);
        if (s.meOurChoiceOppAtk !== -1) locked.push(s.meOurChoiceOppAtk);
    }
    return locked;
}

function getAvailable(s, team, count, phase) {
    let all = [0, 1, 2, 3, 4];
    let locked = getLockedPlayers(s, team);
    let assigned = [...locked];
    
    if (phase === 'IS') {
        if (team === 'our') {
            if (s.isOurDef !== -1) assigned.push(s.isOurDef);
            if (s.isOurAtks && s.isOurAtks.length) assigned.push(...s.isOurAtks);
        } else {
            if (s.isOppDef !== -1) assigned.push(s.isOppDef);
            if (s.isOppAtks && s.isOppAtks.length) assigned.push(...s.isOppAtks);
        }
    } else if (phase === 'ME') {
        if (team === 'our') {
            if (s.meOurDef !== -1) assigned.push(s.meOurDef);
            if (s.meOurAtks && s.meOurAtks.length) assigned.push(...s.meOurAtks);
        } else {
            if (s.meOppDef !== -1) assigned.push(s.meOppDef);
            if (s.meOppAtks && s.meOppAtks.length) assigned.push(...s.meOppAtks);
        }
    }
    
    let avail = all.filter(x => !assigned.includes(x));
    if (count === 1) return avail;
    if (count === 2) {
        if (avail.length === 2) return [avail]; // Return single pair array
        return getPairsFromArray(avail);
    }
    return avail;
}

const SOLVE_ORDER = [
    { key: 'isOurDef',   type: 'max', getChoices: (s) => getAvailable(s, 'our', 1, 'IS') },
    { key: 'isOurAtks',  type: 'max', getChoices: (s) => getAvailable(s, 'our', 2, 'IS') },
    { key: 'isOppDef',   type: 'min', getChoices: (s) => getAvailable(s, 'opp', 1, 'IS') },
    { key: 'isOppAtks',  type: 'min', getChoices: (s) => getAvailable(s, 'opp', 2, 'IS') },
    { key: 'isOurChoiceOppAtk',   type: 'max', getChoices: (s) => s.isOppAtks },
    { key: 'isOppChoiceOurAtk',   type: 'min', getChoices: (s) => s.isOurAtks },
    
    { key: 'meOurDef',   type: 'max', getChoices: (s) => getAvailable(s, 'our', 1, 'ME') },
    { key: 'meOurAtks',  type: 'max', getChoices: (s) => getAvailable(s, 'our', 2, 'ME') },
    { key: 'meOppDef',   type: 'min', getChoices: (s) => getAvailable(s, 'opp', 1, 'ME') },
    { key: 'meOppAtks',  type: 'min', getChoices: (s) => getAvailable(s, 'opp', 2, 'ME') },
    { key: 'meOurChoiceOppAtk',   type: 'max', getChoices: (s) => s.meOppAtks },
    { key: 'meOppChoiceOurAtk',   type: 'min', getChoices: (s) => s.meOurAtks }
];

function solve(s) {
    let phase = null;
    for (let p of SOLVE_ORDER) {
        if (p.key === 'isOurAtks' || p.key === 'isOppAtks' || p.key === 'meOurAtks' || p.key === 'meOppAtks') {
            if (!s[p.key] || s[p.key].length === 0) { phase = p; break; }
        } else {
            if (s[p.key] === -1) { phase = p; break; }
        }
    }

    if (!phase) {
        const ourLocked = getLockedPlayers(s, 'our');
        const oppLocked = getLockedPlayers(s, 'opp');
        const ourRefused = [0, 1, 2, 3, 4].find(x => !ourLocked.includes(x));
        const oppRefused = [0, 1, 2, 3, 4].find(x => !oppLocked.includes(x));

        return getScore(s.isOurDef, s.isOurChoiceOppAtk, 'our') +
               getScore(s.isOppChoiceOurAtk, s.isOppDef, 'opp') +
               getScore(s.meOurDef, s.meOurChoiceOppAtk, 'our') +
               getScore(s.meOppChoiceOurAtk, s.meOppDef, 'opp') +
               getScore(ourRefused, oppRefused, 'refused');
    }

    let choices = phase.getChoices(s);
    if (phase.type === 'max') {
        let maxVal = -Infinity;
        for (let c of choices) {
            let ns = { ...s };
            ns[phase.key] = c;
            let val = solve(ns);
            if (val > maxVal) maxVal = val;
        }
        return maxVal;
    } else {
        let minVal = Infinity;
        for (let c of choices) {
            let ns = { ...s };
            ns[phase.key] = c;
            let val = solve(ns);
            if (val < minVal) minVal = val;
        }
        return minVal;
    }
}

function getValidActionsForUIStep(step) {
    switch (step) {
        case STEPS.IS_DEF:     return getAvailable(STATE, 'our', 1, 'IS');
        case STEPS.IS_ATK:     return getAvailable(STATE, 'our', 2, 'IS');
        case STEPS.IS_OPP_DEF: return getAvailable(STATE, 'opp', 1, 'IS');
        case STEPS.IS_OPP_ATK: return getAvailable(STATE, 'opp', 2, 'IS');
        case STEPS.IS_OUR_ACC: return STATE.isOppAtks;
        case STEPS.IS_OPP_ACC: return STATE.isOurAtks;
        case STEPS.ME_DEF:     return getAvailable(STATE, 'our', 1, 'ME');
        case STEPS.ME_OPP_DEF: return getAvailable(STATE, 'opp', 1, 'ME');
        case STEPS.ME_OUR_ACC: return STATE.meOppAtks;
        case STEPS.ME_OPP_ACC: return STATE.meOurAtks;
        default: return [];
    }
}

function applyUIAction(state, step, action) {
    let ns = { ...state };
    switch (step) {
        case STEPS.IS_DEF:     ns.isOurDef = action; break;
        case STEPS.IS_ATK:     ns.isOurAtks = action; break;
        case STEPS.IS_OPP_DEF: ns.isOppDef = action; break;
        case STEPS.IS_OPP_ATK: ns.isOppAtks = action; break;
        case STEPS.IS_OUR_ACC: ns.isOurChoiceOppAtk = action; break;
        case STEPS.IS_OPP_ACC: ns.isOppChoiceOurAtk = action; break;
        case STEPS.ME_DEF:     ns.meOurDef = action; break;
        case STEPS.ME_OPP_DEF: ns.meOppDef = action; break;
        case STEPS.ME_OUR_ACC: ns.meOurChoiceOppAtk = action; break;
        case STEPS.ME_OPP_ACC: ns.meOppChoiceOurAtk = action; break;
    }
    return ns;
}

function evaluateCurrentActions() {
    let evs = [];
    let isOurTurn = [STEPS.IS_DEF, STEPS.IS_ATK, STEPS.IS_OUR_ACC, STEPS.ME_DEF, STEPS.ME_OUR_ACC].includes(STATE.step);

    for (let action of getValidActionsForUIStep(STATE.step)) {
        let ns = applyUIAction(STATE, STATE.step, action);
        
        // Auto-assign ME attackers for simulation since they are deterministic
        if (ns.step >= STEPS.IS_OPP_ACC) {
            if (ns.meOurDef !== -1 && ns.meOurAtks.length === 0) {
                ns.meOurAtks = getAvailable(ns, 'our', 2, 'ME')[0];
            }
            if (ns.meOppDef !== -1 && ns.meOppAtks.length === 0) {
                ns.meOppAtks = getAvailable(ns, 'opp', 2, 'ME')[0];
            }
        }
        
        let val = solve(ns);
        let actionArr = Array.isArray(action) ? action : [action];
        evs.push({ action: actionArr, val: val });
    }

    evs.sort((a, b) => isOurTurn ? b.val - a.val : a.val - b.val);
    return evs;
}

// --- COLOUR UTILITIES ---

function scoreToColor(score, alpha = 0.4) {
    const t = Math.max(0, Math.min(20, score)) / 20;
    const hue = t * 120; // 0=red, 60=yellow, 120=green
    return `hsla(${hue}, 75%, 45%, ${alpha})`;
}

function scoreToTextColor(score) {
    const t = Math.max(0, Math.min(20, score)) / 20;
    const hue = t * 120;
    return `hsl(${hue}, 80%, 70%)`;
}

// --- SETUP & EVENT LISTENERS ---

let currentWorkbook = null;

document.addEventListener('DOMContentLoaded', () => {
    initCellData();
    initMatrix();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('start-draft-btn').addEventListener('click', startDraft);
    document.getElementById('confirm-action-btn').addEventListener('click', confirmAction);

    // Excel Upload logic
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('excel-upload');

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFile(e.target.files[0]);
    });

    document.getElementById('load-matrix-btn').addEventListener('click', loadSheetToMatrix);
    document.getElementById('skip-upload-btn').addEventListener('click', () => switchView('matrix-view'));
    document.getElementById('test-data-btn').addEventListener('click', loadTestData);
    document.getElementById('back-to-setup-btn').addEventListener('click', () => switchView('setup-view'));

    // Close popover when clicking outside
    document.addEventListener('click', (e) => {
        const popover = document.getElementById('score-popover');
        if (!popover || popover.style.display === 'none') return;
        if (!popover.contains(e.target) && !e.target.closest('.matrix-cell')) {
            closeScorePopover();
        }
    });

    document.getElementById('popover-close-btn').addEventListener('click', closeScorePopover);

    // Map lightbox
    document.getElementById('map-lightbox-close').addEventListener('click', closeMapLightbox);
    document.getElementById('map-lightbox-backdrop').addEventListener('click', closeMapLightbox);

    // Mission modal
    document.getElementById('mission-modal-close').addEventListener('click', closeMissionModal);
    document.getElementById('mission-modal-backdrop').addEventListener('click', closeMissionModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMissionModal();
            closeMapLightbox();
            closeScorePopover();
        }
    });
}

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    if (viewId === 'matrix-view') closeScorePopover();
}

// --- EXCEL UPLOAD ---

function loadTestData() {
    const ourInputs = document.querySelectorAll('.our-name');
    const oppInputs = document.querySelectorAll('.opp-name');

    // Shuffle dispositions for exact 1-to-1 match
    let ourDisps = DISPOSITIONS.map(d => d.key).sort(() => Math.random() - 0.5);
    let oppDisps = DISPOSITIONS.map(d => d.key).sort(() => Math.random() - 0.5);
    
    // Fill our team
    for (let i = 0; i < 5; i++) {
        ourInputs[i].value = FACTIONS[Math.floor(Math.random() * FACTIONS.length)];
        const dispEl = document.querySelector(`.our-disp[data-row="${i}"]`);
        if (dispEl) dispEl.value = ourDisps[i];
    }
    
    // Fill opp team
    for (let i = 0; i < 5; i++) {
        oppInputs[i].value = FACTIONS[Math.floor(Math.random() * FACTIONS.length)];
        const dispEl = document.querySelector(`.opp-disp[data-col="${i}"]`);
        if (dispEl) dispEl.value = oppDisps[i];
    }
    
    // Randomize matrix
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            cellData[i][j].mapScores = [
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
            ];
        }
    }
    
    updateMatrixCells();
    validateDispositions();
    switchView('matrix-view');
}

function handleFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        currentWorkbook = XLSX.read(data, { type: 'array' });

        const select = document.getElementById('sheet-select');
        select.innerHTML = '';
        currentWorkbook.SheetNames.forEach(name => {
            let opt = document.createElement('option');
            opt.value = name;
            opt.innerText = name;
            select.appendChild(opt);
        });

        document.getElementById('opponent-selector').style.display = 'block';
    };
    reader.readAsArrayBuffer(file);
}

function loadSheetToMatrix() {
    if (!currentWorkbook) return;
    const sheetName = document.getElementById('sheet-select').value;
    const worksheet = currentWorkbook.Sheets[sheetName];
    const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    if (rawData.length >= 6) {
        const oppNames = rawData[0].slice(1, 6);
        const oppInputs = document.querySelectorAll('.opp-name');
        oppNames.forEach((n, idx) => { if (oppInputs[idx] && n) oppInputs[idx].value = n; });

        const ourInputs = document.querySelectorAll('.our-name');
        for (let i = 0; i < 5; i++) {
            const row = rawData[i + 1] || [];
            if (ourInputs[i] && row[0]) ourInputs[i].value = row[0];

            for (let j = 0; j < 5; j++) {
                const score = parseFloat(row[j + 1]);
                if (!isNaN(score)) {
                    // Load as uniform map score across all 3 maps
                    cellData[i][j].mapScores = [score, score, score];
                }
            }
        }
    }

    updateMatrixCells();
    switchView('matrix-view');
}

// --- MATRIX INIT ---

function initMatrix() {
    const dispositionOptions = DISPOSITIONS.map(d =>
        `<option value="${d.key}">${d.label}</option>`
    ).join('');

    const factionOptions = FACTIONS.map(f => `<option value="${f}">${f}</option>`).join('');

    const headerRow = document.getElementById('matrix-header');

    for (let j = 0; j < 5; j++) {
        let th = document.createElement('th');
        th.className = 'col-header';
        th.innerHTML = `
            <select class="opp-name dropdown-faction">${factionOptions}</select>
            <select class="opp-disp dropdown-disposition" data-col="${j}">${dispositionOptions}</select>
        `;
        th.querySelector('.opp-name').selectedIndex = j;
        headerRow.appendChild(th);
    }

    const tbody = document.getElementById('matrix-body');
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.className = 'row-header';
        th.innerHTML = `
            <select class="our-name dropdown-faction">${factionOptions}</select>
            <select class="our-disp dropdown-disposition" data-row="${i}">${dispositionOptions}</select>
        `;
        th.querySelector('.our-name').selectedIndex = i + 5;
        tr.appendChild(th);

        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td');
            td.className = 'matrix-cell';
            td.dataset.row = i;
            td.dataset.col = j;
            td.innerHTML = `
                <div class="cell-mission">T&amp;H vs T&amp;H</div>
                <div class="cell-score">10.0</div>
                <div class="cell-maps">
                    <span class="map-pip" title="Map A"></span>
                    <span class="map-pip" title="Map B"></span>
                    <span class="map-pip" title="Map C"></span>
                </div>
            `;
            td.addEventListener('click', (e) => {
                e.stopPropagation();
                openScorePopover(i, j, td);
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    // Listen for disposition changes to refresh cell missions and validate
    document.getElementById('matrix-table').addEventListener('change', (e) => {
        if (e.target.classList.contains('our-disp') || e.target.classList.contains('opp-disp')) {
            updateMatrixCells();
            validateDispositions();
        }
    });

    updateMatrixCells();
    validateDispositions();
}

function getOurDisposition(i) {
    const el = document.querySelector(`.our-disp[data-row="${i}"]`);
    return el ? el.value : DISPOSITIONS[0].key;
}

function getOppDisposition(j) {
    const el = document.querySelector(`.opp-disp[data-col="${j}"]`);
    return el ? el.value : DISPOSITIONS[0].key;
}

function updateMatrixCells() {
    for (let i = 0; i < 5; i++) {
        // Update row-header disposition badge colour
        const rowHeader = document.querySelector(`.our-disp[data-row="${i}"]`);
        if (rowHeader) {
            const disp = DISPOSITIONS.find(d => d.key === rowHeader.value);
            rowHeader.style.borderColor = disp ? disp.color : '';
        }

        for (let j = 0; j < 5; j++) {
            // Update col-header disposition badge colour
            if (i === 0) {
                const colHeader = document.querySelector(`.opp-disp[data-col="${j}"]`);
                if (colHeader) {
                    const disp = DISPOSITIONS.find(d => d.key === colHeader.value);
                    colHeader.style.borderColor = disp ? disp.color : '';
                }
            }

            const cell = document.querySelector(`.matrix-cell[data-row="${i}"][data-col="${j}"]`);
            if (!cell) continue;

            const ourDisp = getOurDisposition(i);
            const oppDisp = getOppDisposition(j);
            const missionData = MISSION_TABLE[ourDisp][oppDisp];
            const score = getCellExpectedScore(i, j);
            const mapScores = cellData[i][j].mapScores;

            // Truncate mission name if needed
            const fullMission = missionData.mission;
            const missionShort = fullMission.length > 22 ? fullMission.substring(0, 20) + '…' : fullMission;

            cell.querySelector('.cell-mission').textContent = missionShort;
            cell.querySelector('.cell-mission').title = fullMission;

            const scoreEl = cell.querySelector('.cell-score');
            scoreEl.textContent = score.toFixed(1);
            scoreEl.style.color = scoreToTextColor(score);

            // Update map pips
            const pips = cell.querySelectorAll('.map-pip');
            ['A', 'B', 'C'].forEach((label, idx) => {
                const s = mapScores[idx];
                pips[idx].style.background = scoreToColor(s, 0.9);
                pips[idx].title = `Map ${label}: ${s.toFixed(1)}`;
            });

            // Cell background
            cell.style.background = scoreToColor(score, 0.25);
            cell.style.borderColor = scoreToColor(score, 0.6);
        }
    }
}

// --- DISPOSITION VALIDATION ---

function validateDispositions() {
    const ourDisps  = Array.from(document.querySelectorAll('.our-disp')).map(el => el.value);
    const oppDisps  = Array.from(document.querySelectorAll('.opp-disp')).map(el => el.value);

    const findDupes = (arr) => arr.filter((d, i) => arr.indexOf(d) !== i);
    const ourDupes  = [...new Set(findDupes(ourDisps))];
    const oppDupes  = [...new Set(findDupes(oppDisps))];

    const dispLabel = (key) => DISPOSITIONS.find(d => d.key === key)?.label || key;

    // Highlight problem selects
    document.querySelectorAll('.our-disp').forEach(el => {
        el.classList.toggle('disp-invalid', ourDupes.includes(el.value));
    });
    document.querySelectorAll('.opp-disp').forEach(el => {
        el.classList.toggle('disp-invalid', oppDupes.includes(el.value));
    });

    // Show/hide banner
    const banner = document.getElementById('disposition-warning');
    const hasErrors = ourDupes.length > 0 || oppDupes.length > 0;

    if (hasErrors) {
        const msgs = [];
        if (ourDupes.length > 0) msgs.push(`<strong>Our team</strong> has duplicate disposition${ourDupes.length > 1 ? 's' : ''}: ${ourDupes.map(dispLabel).join(', ')}`);
        if (oppDupes.length > 0) msgs.push(`<strong>Opponent</strong> has duplicate disposition${oppDupes.length > 1 ? 's' : ''}: ${oppDupes.map(dispLabel).join(', ')}`);
        banner.innerHTML = `<span class="warn-icon">⚠</span> Each team must have one of each disposition. ${msgs.join(' &mdash; ')}`;
        banner.style.display = 'flex';
    } else {
        banner.style.display = 'none';
    }

    // Block draft start if invalid
    document.getElementById('start-draft-btn').disabled = hasErrors;
}

// --- MAP LIGHTBOX ---

function openMapLightbox(mapFile, mapLabel, missionData) {
    const lightbox = document.getElementById('map-lightbox');
    document.getElementById('map-lightbox-title').textContent = mapLabel;
    document.getElementById('map-lightbox-img').src = `maps/${mapFile}`;

    // Render mission detail panels
    const ourPanel = document.getElementById('mlb-our-panel');
    const oppPanel = document.getElementById('mlb-opp-panel');
    ourPanel.innerHTML = '';
    oppPanel.innerHTML = '';

    if (missionData) {
        if (missionData.isAsymmetric) {
            ourPanel.appendChild(buildMissionCard(missionData.playerObj, 'Our Objective'));
            oppPanel.appendChild(buildMissionCard(missionData.oppObj, 'Their Objective'));
        } else {
            // Symmetric — same objective both sides
            ourPanel.appendChild(buildMissionCard(missionData.mission, 'Your Side'));
            oppPanel.appendChild(buildMissionCard(missionData.mission, 'Their Side'));
        }
    }

    lightbox.style.display = 'flex';
    requestAnimationFrame(() => lightbox.classList.add('lightbox-visible'));
}

function closeMapLightbox() {
    const lightbox = document.getElementById('map-lightbox');
    lightbox.classList.remove('lightbox-visible');
    setTimeout(() => { lightbox.style.display = 'none'; }, 200);
}

// --- SCORE POPOVER ---

let activePopoverCell = null;

function openScorePopover(i, j, cellEl) {
    // If same cell clicked again, close it
    if (activePopoverCell && activePopoverCell.i === i && activePopoverCell.j === j) {
        closeScorePopover();
        return;
    }
    closeScorePopover();

    const ourDisp = getOurDisposition(i);
    const oppDisp = getOppDisposition(j);
    const missionData = MISSION_TABLE[ourDisp][oppDisp];
    
    activePopoverCell = { i, j, cellEl, missionData };
    cellEl.classList.add('cell-active');

    const mapData = cellData[i][j];

    // Populate popover — mission name is clickable to open detail modal
    const missionEl = document.getElementById('popover-mission');
    missionEl.textContent = missionData.mission;
    missionEl.title = 'Click to view mission details';
    missionEl.style.cursor = 'pointer';
    missionEl.onclick = (e) => { e.stopPropagation(); openMissionModal(missionData); };

    // Player names
    const ourName = document.querySelectorAll('.our-name')[i]?.value || `Player ${i + 1}`;
    const oppName = document.querySelectorAll('.opp-name')[j]?.value || `Opponent ${j + 1}`;
    document.getElementById('popover-matchup').textContent = `${ourName} vs ${oppName}`;

    // Objectives
    const objDiv = document.getElementById('popover-objectives');
    if (missionData.isAsymmetric) {
        objDiv.innerHTML = `
            <div class="obj-badge our-obj-badge">
                <span class="obj-label">Our Objective</span>
                <span class="obj-name">${missionData.playerObj}</span>
            </div>
            <div class="obj-vs">vs</div>
            <div class="obj-badge opp-obj-badge">
                <span class="obj-label">Their Objective</span>
                <span class="obj-name">${missionData.oppObj}</span>
            </div>
        `;
    } else {
        objDiv.innerHTML = `
            <div class="obj-badge sym-obj-badge">
                <span class="obj-label">Symmetrical Mission</span>
                <span class="obj-name">Both sides play the same objective</span>
            </div>
        `;
    }

    // Map score rows
    const mapContainer = document.getElementById('popover-maps');
    mapContainer.innerHTML = '';
    const mapFileBase = missionData.mapFile || '';
    ['A', 'B', 'C'].forEach((mapLabel, idx) => {
        const score = mapData.mapScores[idx] ?? 10;
        const mapFilename = `${mapFileBase}-${mapLabel}.png`;
        const row = document.createElement('div');
        row.className = 'map-row';
        row.innerHTML = `
            <button class="map-label map-label-btn" title="View Map ${mapLabel} layout" data-file="${mapFilename}" data-label="Map ${mapLabel} — ${missionData.mission}">Map ${mapLabel}</button>
            <div class="map-input-group">
                <input type="range" class="map-slider" min="0" max="20" step="0.5" value="${score}" data-map="${idx}" aria-label="Map ${mapLabel} score slider">
                <input type="number" class="map-number" min="0" max="20" step="0.5" value="${score}" data-map="${idx}" aria-label="Map ${mapLabel} score">
            </div>
            <span class="map-pip-lg" data-map="${idx}" style="background:${scoreToColor(score, 0.9)};"></span>
        `;

        row.querySelector('.map-label-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openMapLightbox(mapFilename, e.currentTarget.dataset.label, missionData);
        });

        const slider = row.querySelector('.map-slider');
        const number = row.querySelector('.map-number');
        const pip = row.querySelector('.map-pip-lg');

        const syncValues = (val) => {
            const clamped = Math.max(0, Math.min(20, val));
            slider.value = clamped;
            number.value = clamped;
            pip.style.background = scoreToColor(clamped, 0.9);
            savePopoverData();
            updatePopoverAverage();
        };

        slider.addEventListener('input', () => syncValues(parseFloat(slider.value)));
        number.addEventListener('change', () => syncValues(parseFloat(number.value) || 0));
        number.addEventListener('input', () => {
            pip.style.background = scoreToColor(parseFloat(number.value) || 0, 0.9);
        });

        mapContainer.appendChild(row);
    });

    updatePopoverAverage();

    // Show popover (hidden first so we can measure it)
    const popover = document.getElementById('score-popover');
    popover.style.visibility = 'hidden';
    popover.style.display = 'block';

    // Position after content is rendered
    requestAnimationFrame(() => {
        positionPopover(cellEl);
        popover.style.visibility = 'visible';
        popover.classList.add('popover-visible');
    });
}

function positionPopover(cellEl) {
    const popover = document.getElementById('score-popover');
    const container = document.querySelector('.matrix-container');

    const popW = popover.offsetWidth || 340;
    const popH = popover.offsetHeight || 360;

    // cellEl offset relative to its offsetParent chain, then subtract container's offset
    // Simplest reliable approach: use getBoundingClientRect difference
    const cellRect = cellEl.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Position inside container coordinate space (accounting for scroll)
    const cellLeft = cellRect.left - containerRect.left + container.scrollLeft;
    const cellTop  = cellRect.top  - containerRect.top  + container.scrollTop;
    const cellRight  = cellLeft + cellEl.offsetWidth;
    const cellBottom = cellTop  + cellEl.offsetHeight;

    const containerW = container.scrollWidth;
    const containerH = container.scrollHeight;

    let left, top;

    // Prefer to open below the cell
    if (cellBottom + popH + 8 <= containerH) {
        top = cellBottom + 8;
    } else if (cellTop - popH - 8 >= 0) {
        top = cellTop - popH - 8;
    } else {
        top = Math.max(0, cellTop);
    }

    // Prefer to align left edge with cell
    if (cellLeft + popW <= containerW) {
        left = cellLeft;
    } else {
        left = Math.max(0, cellRight - popW);
    }

    popover.style.left = left + 'px';
    popover.style.top  = top  + 'px';
}

function updatePopoverAverage() {
    const sliders = document.querySelectorAll('#popover-maps .map-slider');
    const scores = Array.from(sliders).map(s => parseFloat(s.value) || 0);
    const avg = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 10;

    const avgEl = document.getElementById('popover-average');
    avgEl.textContent = avg.toFixed(1);
    avgEl.style.color = scoreToTextColor(avg);

    const bar = document.getElementById('popover-avg-bar');
    if (bar) {
        bar.style.width = (avg / 20 * 100) + '%';
        bar.style.background = scoreToColor(avg, 0.9);
    }
}
function savePopoverData() {
    if (!activePopoverCell) return;
    const { i, j } = activePopoverCell;
    const sliders = document.querySelectorAll('#popover-maps .map-slider');
    cellData[i][j].mapScores = Array.from(sliders).map(s => parseFloat(s.value) || 0);
    updateMatrixCells();
}

function closeScorePopover() {
    if (activePopoverCell) {
        activePopoverCell.cellEl.classList.remove('cell-active');
    }
    activePopoverCell = null;
    const popover = document.getElementById('score-popover');
    if (popover) {
        popover.classList.remove('popover-visible');
        popover.style.display = 'none';
    }
}

// --- DRAFT SETUP ---

function startDraft() {
    STATE.ourTeam = Array.from(document.querySelectorAll('.our-name')).map(el => el.value);
    STATE.oppTeam = Array.from(document.querySelectorAll('.opp-name')).map(el => el.value);
    STATE.round = parseInt(document.getElementById('round-select').value) || 1;

    STATE.matrix = [];
    for (let i = 0; i < 5; i++) {
        STATE.matrix[i] = [];
        for (let j = 0; j < 5; j++) {
            STATE.matrix[i][j] = getCellExpectedScore(i, j);
        }
    }

    STATE.step = STEPS.IS_DEF;
    STATE.isOurDef = -1;
    STATE.isOurAtks = [];
    STATE.isOppDef = -1;
    STATE.isOppAtks = [];
    STATE.isOurChoiceOppAtk = -1;
    STATE.isOppChoiceOurAtk = -1;

    STATE.meOurDef = -1;
    STATE.meOurAtks = [];
    STATE.meOppDef = -1;
    STATE.meOppAtks = [];
    STATE.meOurChoiceOppAtk = -1;
    STATE.meOppChoiceOurAtk = -1;

    STATE.matches = [];

    switchView('draft-view');
    updateDraftUI();
}

// --- DRAFT UI ---

let selectedActions = [];

function getBestMapInfo(ourIdx, oppIdx, defenderSide) {
    const scores = cellData[ourIdx][oppIdx].mapScores;
    let bestIdx = 0;
    
    if (defenderSide === 'our') {
        let bestScore = -Infinity;
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] > bestScore) { bestScore = scores[i]; bestIdx = i; }
        }
    } else if (defenderSide === 'opp') {
        let bestScore = Infinity;
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] < bestScore) { bestScore = scores[i]; bestIdx = i; }
        }
    } else {
        bestIdx = (STATE.round - 1) % 3;
    }
    
    const mapLabels = ['A', 'B', 'C'];
    const ourDisp = getOurDisposition(ourIdx);
    const oppDisp = getOppDisposition(oppIdx);
    const missionData = MISSION_TABLE[ourDisp][oppDisp];
    const mapFilename = `${missionData.mapFile}-${mapLabels[bestIdx]}.png`;
    
    return {
        bestScore: scores[bestIdx],
        mapLabel: mapLabels[bestIdx],
        mapFilename,
        missionData
    };
}

function updateDraftUI() {
    selectedActions = [];
    document.getElementById('confirm-action-btn').disabled = true;

    renderPools();
    renderMatches();

    if (STATE.step === STEPS.DONE) {
        document.querySelector('.active-step-panel').innerHTML = `
            <h2 style="text-align:center; font-size: 3rem; margin-bottom: 2rem; font-family: var(--font-heading);">FINAL PAIRINGS</h2>
            <div class="final-pairings-layout">
                <div class="pairing-row">
                    ${STATE.matches.map(m => `
                        <div class="pairing-card">
                            <div>
                                <div style="font-size: 0.7rem; color: #cbd5e1; margin-bottom: 0.5rem; text-transform: uppercase; font-weight: bold;">${m.label}</div>
                                <div class="pairing-faction">${STATE.oppTeam[m.oppIdx]}</div>
                                <div class="pairing-team">Opponent</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="table-row">
                    ${STATE.matches.map((m, i) => {
                        const mapInfo = getBestMapInfo(m.ourIdx, m.oppIdx, m.isFixedMap ? m.fixedMapIdx : null);
                        return `
                        <div class="table-label" style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
                            <div>TABLE ${i + 1}</div>
                            <button style="border: 1px solid rgba(255,255,255,0.2); border-radius: 0.25rem; overflow:hidden; width:60px; height:40px; padding:0; background:#1e293b; cursor:pointer;" onclick="openMapLightbox('${mapInfo.mapFilename}', 'Map ${mapInfo.mapLabel} — ${mapInfo.missionData.mission}', ${JSON.stringify(mapInfo.missionData).replace(/"/g, '&quot;')})">
                                <img src="maps/${mapInfo.mapFilename}" style="width:100%; height:100%; object-fit:cover;">
                            </button>
                            <div style="font-size:0.7rem; color:${scoreToTextColor(mapInfo.bestScore)}">${mapInfo.bestScore.toFixed(1)} pts</div>
                        </div>`;
                    }).join('')}
                </div>
                <div class="pairing-row">
                    ${STATE.matches.map(m => `
                        <div class="pairing-card">
                            <div>
                                <div class="pairing-faction">${STATE.ourTeam[m.ourIdx]}</div>
                                <div class="pairing-team">Our Team</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div style="text-align:center; margin-top: 2rem;">
                <p style="font-size: 1.2rem;">Expected Total Score: <strong style="color:var(--success); font-size: 1.5rem;">${STATE.matches.reduce((sum, m) => sum + m.score, 0).toFixed(1)}</strong></p>
                <button class="btn primary" onclick="location.reload()" style="margin-top:1.5rem; font-size: 1.1rem; padding: 1rem 2rem;">New Draft</button>
            </div>
        `;
        return;
    }

    const stepConfig = getStepConfig();
    document.getElementById('step-badge').innerText = stepConfig.badge;
    document.getElementById('step-title').innerText = stepConfig.title;
    document.getElementById('step-desc').innerText = stepConfig.desc;

    const actionArea = document.getElementById('action-area');
    actionArea.innerHTML = '';

    let choices = getValidActionsForUIStep(STATE.step);
    choices.forEach(action => {
        let actionArr = Array.isArray(action) ? action : [action];
        let names = actionArr.map(idx => stepConfig.team[idx]).join(' & ');

        let btn = document.createElement('div');
        btn.className = 'action-card';
        btn.dataset.action = JSON.stringify(action);
        
        let mapHtml = '';
        if (STATE.step === STEPS.IS_OUR_ACC || STATE.step === STEPS.ME_OUR_ACC) {
            const ourDefIdx = STATE.step === STEPS.IS_OUR_ACC ? STATE.isOurDef : STATE.meOurDef;
            const mapInfo = getBestMapInfo(ourDefIdx, action, 'our');
            mapHtml = `
                <div style="display:flex; flex-direction:column; align-items:flex-end; margin-left:auto; gap:0.25rem;">
                    <div style="font-size:0.65rem; color:var(--text-muted); text-transform:uppercase;">Best Map Layout</div>
                    <div style="display:flex; align-items:center; gap:0.5rem; background:rgba(0,0,0,0.2); padding:0.25rem 0.5rem; border-radius:0.25rem; border:1px solid rgba(255,255,255,0.1);">
                        <img src="maps/${mapInfo.mapFilename}" style="width:40px; height:25px; object-fit:cover; border-radius:0.15rem; border:1px solid rgba(255,255,255,0.2);">
                        <div style="display:flex; flex-direction:column; align-items:flex-start;">
                            <div style="font-size:0.75rem; font-weight:bold; color:#f8fafc;">Map ${mapInfo.mapLabel}</div>
                            <div style="font-size:0.7rem; color:${scoreToTextColor(mapInfo.bestScore)};">${mapInfo.bestScore.toFixed(1)} pts</div>
                        </div>
                    </div>
                </div>
            `;
            btn.style.display = 'flex';
            btn.style.justifyContent = 'space-between';
            btn.style.alignItems = 'center';
        }
        
        btn.innerHTML = `<div class="player-name">${names}</div>${mapHtml}`;
        btn.onclick = () => selectAction(btn, action, stepConfig.maxSelections);
        actionArea.appendChild(btn);
    });

    renderRecommendations(stepConfig.team);
}

function renderPools() {
    let ourUsed = [];
    let oppUsed = [];

    if (STATE.isOurDef !== -1) ourUsed.push(STATE.isOurDef);
    if (STATE.isOurAtks.length) ourUsed.push(...STATE.isOurAtks);
    if (STATE.isOppDef !== -1) oppUsed.push(STATE.isOppDef);
    if (STATE.isOppAtks.length) oppUsed.push(...STATE.isOppAtks);
    
    if (STATE.meOurDef !== -1) ourUsed.push(STATE.meOurDef);
    if (STATE.meOurAtks.length) ourUsed.push(...STATE.meOurAtks);
    if (STATE.meOppDef !== -1) oppUsed.push(STATE.meOppDef);
    if (STATE.meOppAtks.length) oppUsed.push(...STATE.meOppAtks);

    const ourContainer = document.getElementById('our-pool');
    ourContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let isUsed = ourUsed.includes(i);
        let div = document.createElement('div');
        div.className = 'player-item' + (isUsed ? ' used' : '');
        div.innerHTML = `<span>${STATE.ourTeam[i]}</span>`;
        ourContainer.appendChild(div);
    }

    const oppContainer = document.getElementById('opp-pool');
    oppContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let isUsed = oppUsed.includes(i);
        let div = document.createElement('div');
        div.className = 'player-item' + (isUsed ? ' used' : '');
        div.innerHTML = `<span>${STATE.oppTeam[i]}</span>`;
        oppContainer.appendChild(div);
    }
}

function renderMatches() {
    const container = document.getElementById('locked-matches');
    container.innerHTML = '';
    let total = 0;
    STATE.matches.forEach(m => {
        const mapInfo = getBestMapInfo(m.ourIdx, m.oppIdx, m.defenderSide);
        let div = document.createElement('div');
        div.className = 'match-card';
        div.innerHTML = `
            <div style="font-size: 0.8em; color: var(--text-muted); margin-bottom: 0.25rem;">${m.label}</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <div><strong>${STATE.ourTeam[m.ourIdx]}</strong></div>
                    <div style="font-size:0.8rem;">vs <strong>${STATE.oppTeam[m.oppIdx]}</strong></div>
                    <div class="match-score" style="color:${scoreToTextColor(mapInfo.bestScore)}">${mapInfo.bestScore.toFixed(1)} pts</div>
                </div>
                <button title="Map ${mapInfo.mapLabel}" style="flex-shrink:0; border: 1px solid rgba(255,255,255,0.2); border-radius: 0.25rem; overflow:hidden; width:50px; height:35px; padding:0; background:#1e293b; cursor:pointer;" onclick="openMapLightbox('${mapInfo.mapFilename}', 'Map ${mapInfo.mapLabel} — ${mapInfo.missionData.mission}', ${JSON.stringify(mapInfo.missionData).replace(/"/g, '&quot;')})">
                    <img src="maps/${mapInfo.mapFilename}" style="width:100%; height:100%; object-fit:cover;">
                </button>
            </div>
        `;
        container.appendChild(div);
        total += m.score;
    });
    document.getElementById('total-score').innerText = total.toFixed(1);
}

function selectAction(el, action, maxSelections) {
    if (el.classList.contains('selected')) {
        el.classList.remove('selected');
        selectedActions = [];
    } else {
        document.querySelectorAll('.action-card.selected').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        selectedActions = [action];
    }

    document.getElementById('confirm-action-btn').disabled = selectedActions.length === 0;
}

function getStepConfig() {
    switch (STATE.step) {
        case STEPS.IS_DEF:     return { badge: 'Skirmish 1', title: 'Select Our Defender',       desc: 'Secretly select our Skirmish Defender.', team: STATE.ourTeam, maxSelections: 1 };
        case STEPS.IS_ATK:     return { badge: 'Skirmish 2', title: 'Select Our Attackers',      desc: 'Secretly select our 2 Skirmish Attackers.', team: STATE.ourTeam, maxSelections: 2 };
        case STEPS.IS_OPP_DEF: return { badge: 'Skirmish 3', title: "Opponent's Defender",       desc: "Which player did the opponent reveal as their Defender?", team: STATE.oppTeam, maxSelections: 1 };
        case STEPS.IS_OPP_ATK: return { badge: 'Skirmish 4', title: "Opponent's Attackers",      desc: 'Which 2 players did the opponent reveal as their Attackers?', team: STATE.oppTeam, maxSelections: 2 };
        case STEPS.IS_OUR_ACC: return { badge: 'Skirmish 5', title: "Accept Opponent Attacker",  desc: `Choose 1 of their Attackers to play our Defender (${STATE.ourTeam[STATE.isOurDef]}).`, team: STATE.oppTeam, maxSelections: 1 };
        case STEPS.IS_OPP_ACC: return { badge: 'Skirmish 6', title: "Opponent Accepts",          desc: `Which of our Attackers did they accept to play their Defender (${STATE.oppTeam[STATE.isOppDef]})?`, team: STATE.ourTeam, maxSelections: 1 };
        case STEPS.ME_DEF:     return { badge: 'Main Eng. 1', title: 'Select Our ME Defender',   desc: 'Select our Main Engagement Defender from the 3 remaining players. (The other 2 will auto-become Attackers).', team: STATE.ourTeam, maxSelections: 1 };
        case STEPS.ME_OPP_DEF: return { badge: 'Main Eng. 2', title: "Opponent's ME Defender",   desc: 'Which player is the opponent\'s Main Engagement Defender?', team: STATE.oppTeam, maxSelections: 1 };
        case STEPS.ME_OUR_ACC: return { badge: 'Main Eng. 3', title: "Accept Opponent Attacker", desc: `Choose 1 of their ME Attackers to play our Defender (${STATE.ourTeam[STATE.meOurDef]}).`, team: STATE.oppTeam, maxSelections: 1 };
        case STEPS.ME_OPP_ACC: return { badge: 'Main Eng. 4', title: "Opponent Accepts",         desc: `Which of our ME Attackers did they accept to play their Defender (${STATE.oppTeam[STATE.meOppDef]})?`, team: STATE.ourTeam, maxSelections: 1 };
    }
}

function renderRecommendations(team) {
    let evs = evaluateCurrentActions();
    let container = document.getElementById('recommendation-content');
    container.innerHTML = '';

    for (let i = 0; i < Math.min(3, evs.length); i++) {
        let actionArr = evs[i].action;
        let names = actionArr.map(idx => team[idx]).join(' & ');

        let div = document.createElement('div');
        div.className = 'rec-item' + (i === 0 ? ' optimal' : '');
        div.innerHTML = `
            <span>${names}</span>
            <span class="expected-value">${evs[i].val.toFixed(1)} EV</span>
        `;
        container.appendChild(div);
    }
}

function updateMatchesState() {
    STATE.matches = [];
    
    // IS Match 1
    if (STATE.isOurDef !== -1 && STATE.isOurChoiceOppAtk !== -1) {
        STATE.matches.push({
            label: 'Skirmish - Our Defender',
            ourIdx: STATE.isOurDef,
            oppIdx: STATE.isOurChoiceOppAtk,
            score: getScore(STATE.isOurDef, STATE.isOurChoiceOppAtk, 'our'),
            defenderSide: 'our'
        });
    }
    // IS Match 2
    if (STATE.isOppDef !== -1 && STATE.isOppChoiceOurAtk !== -1) {
        STATE.matches.push({
            label: 'Skirmish - Their Defender',
            ourIdx: STATE.isOppChoiceOurAtk,
            oppIdx: STATE.isOppDef,
            score: getScore(STATE.isOppChoiceOurAtk, STATE.isOppDef, 'opp'),
            defenderSide: 'opp'
        });
    }
    
    // ME Match 1
    if (STATE.meOurDef !== -1 && STATE.meOurChoiceOppAtk !== -1) {
        STATE.matches.push({
            label: 'Main - Our Defender',
            ourIdx: STATE.meOurDef,
            oppIdx: STATE.meOurChoiceOppAtk,
            score: getScore(STATE.meOurDef, STATE.meOurChoiceOppAtk, 'our'),
            defenderSide: 'our'
        });
    }
    // ME Match 2
    if (STATE.meOppDef !== -1 && STATE.meOppChoiceOurAtk !== -1) {
        STATE.matches.push({
            label: 'Main - Their Defender',
            ourIdx: STATE.meOppChoiceOurAtk,
            oppIdx: STATE.meOppDef,
            score: getScore(STATE.meOppChoiceOurAtk, STATE.meOppDef, 'opp'),
            defenderSide: 'opp'
        });
    }
    
    // Refused Match
    if (STATE.step === STEPS.DONE) {
        const ourLocked = getLockedPlayers(STATE, 'our');
        const oppLocked = getLockedPlayers(STATE, 'opp');
        const ourRefused = [0, 1, 2, 3, 4].find(x => !ourLocked.includes(x));
        const oppRefused = [0, 1, 2, 3, 4].find(x => !oppLocked.includes(x));
        
        const mapIdx = (STATE.round - 1) % 3;
        const fixedScore = cellData[ourRefused][oppRefused].mapScores[mapIdx];
        
        STATE.matches.push({
            label: 'Refused Attackers',
            ourIdx: ourRefused,
            oppIdx: oppRefused,
            score: fixedScore,
            defenderSide: 'refused'
        });
    }
}

function confirmAction() {
    let action = selectedActions[0];
    Object.assign(STATE, applyUIAction(STATE, STATE.step, action));
    
    STATE.step++;
    
    // Auto-assign ME attackers
    if (STATE.step === STEPS.ME_OPP_DEF) {
        if (STATE.meOurDef !== -1 && STATE.meOurAtks.length === 0) {
            STATE.meOurAtks = getAvailable(STATE, 'our', 2, 'ME')[0];
        }
    }
    if (STATE.step === STEPS.ME_OUR_ACC) {
        if (STATE.meOppDef !== -1 && STATE.meOppAtks.length === 0) {
            STATE.meOppAtks = getAvailable(STATE, 'opp', 2, 'ME')[0];
        }
    }

    updateMatchesState();
    updateDraftUI();
}
