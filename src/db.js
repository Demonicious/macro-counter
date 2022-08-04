import localStorageDB from "localStorageDB";
import { v4 as uuidv4 } from "uuid";

const db = new localStorageDB("marcocounter", 'localStorage');

if (db.isNew()) {
    db.createTable('days', [
        'date',
        'meals'
    ]);

    db.commit();
}

export default db;

export function getDayData(date = null) {
    if (!date) {
        let today = new Date();

        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        date = mm + '/' + dd + '/' + yyyy;
    }

    const res = db.queryAll('days', { date });

    if (res.length) {
        const row = res[0];

        return {
            ...row,
            macros: row.meals.reduce((prev, now) => {
                return {
                    calories: prev.calories + now.calories,
                    protein: prev.protein + now.protein,
                    fats: prev.fats + now.fats,
                    carbs: prev.carbs + now.carbs
                };
            }, { calories: 0, fats: 0, carbs: 0, protein: 0 })
        }
    } else {
        db.insert('days', {
            date,
            meals: []
        });

        return {
            date,
            macros: {
                calories: 0,
                fats: 0,
                protein: 0,
                carbs: 0
            },
            meals: []
        };
    }
}

export function createMeal(name, calories, protein, fats, carbs) {
    let today = new Date();

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    let date = mm + '/' + dd + '/' + yyyy;

    const res = db.queryAll('days', { date });
    if (res.length) {
        db.update('days', { date }, function(row) {
            row.meals = [
                ...row.meals,
                {
                    id: uuidv4(),
                    name,
                    calories,
                    protein,
                    carbs,
                    fats
                }
            ];

            return row;
        });
    } else {
        db.insert('days', {
            date,
            meals: [{
                id: uuidv4(),
                name,
                calories,
                protein,
                fats,
                carbs
            }]
        })
    }

    db.commit();
};