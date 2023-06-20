$(document).ready(function(){

    // Records
    const records = {
        "employee": {
            "english": [
                {
                    "label": "How comfortable are you with our company's customs brokerage software? Please explain your rating.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Uncomfortable, ..., 10-Very Comfortable",
                    "scale": ["Very Uncomfortable", "Uncomfortable", "Somewhat Uncomfortable", "Slightly Uncomfortable", "Neutral", "Slightly Comfortable", "Somewhat Comfortable", "Comfortable", "Very Comfortable", "Extremely Comfortable"]
                },
                {
                    "label": "How well can you navigate customs-related problems for our clients? Please share a recent example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Poorly, ..., 10-Very Well",
                    "scale": ["Very Poorly", "Poorly", "Somewhat Poorly", "Slightly Poorly", "Neutral", "Slightly Well", "Somewhat Well", "Well", "Very Well", "Extremely Well"]
                },
                {
                    "label": "How effectively do you stay updated with changes in tariffs and customs regulations? Please explain your strategies.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                },
                {
                    "label": "How efficient are you in ensuring compliance with import and export regulations? Can you share an instance that supports your rating?",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Inefficient, ..., 10-Very Efficient",
                    "scale": ["Very Inefficient", "Inefficient", "Somewhat Inefficient", "Slightly Inefficient", "Neutral", "Slightly Efficient", "Somewhat Efficient", "Efficient", "Very Efficient", "Extremely Efficient"]
                },
                {
                    "label": "How effectively do you handle situations when goods are delayed at customs? Please provide a recent example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                },
                {
                    "label": "How proficient are you in coordinating with customs officials? Please share an example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Not at All Proficient, ..., 10-Very Proficient",
                    "scale": ["Not at All Proficient", "Very Little Proficiency", "Little Proficiency", "Some Proficiency", "Neutral", "Slightly Proficient", "Somewhat Proficient", "Proficient", "Very Proficient", "Extremely Proficient"]
                },
                {
                    "label": "How adept are you in preparing and submitting necessary documentation for imports and exports? Can you describe an instance that supports your rating?",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Inept, ..., 10-Very Adept",
                    "scale": ["Very Inept", "Inept", "Somewhat Inept", "Slightly Inept", "Neutral", "Slightly Adept", "Somewhat Adept", "Adept", "Very Adept", "Extremely Adept"]
                },
                {
                    "label": "How efficiently can you calculate and arrange for the payment of duties and taxes? Please provide an example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Inefficiently, ..., 10-Very Efficiently",
                    "scale": ["Very Inefficiently", "Inefficiently", "Somewhat Inefficiently", "Slightly Inefficiently", "Neutral", "Slightly Efficiently", "Somewhat Efficiently", "Efficiently", "Very Efficiently", "Extremely Efficiently"]
                },
                {
                    "label": "How capable are you in handling import and export restrictions? Please explain.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Incapable, ..., 10-Very Capable",
                    "scale": ["Very Incapable", "Incapable", "Somewhat Incapable", "Slightly Incapable", "Neutral", "Slightly Capable", "Somewhat Capable", "Capable", "Very Capable", "Extremely Capable"]
                },
                {
                    "label": "How comfortable are you in advising clients on trade-related matters such as insurance requirements, quotas, etc.? Please share a recent example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Uncomfortable, ..., 10-Very Comfortable",
                    "scale": ["Very Uncomfortable", "Uncomfortable", "Somewhat Uncomfortable", "Slightly Uncomfortable", "Neutral", "Slightly Comfortable", "Somewhat Comfortable", "Comfortable", "Very Comfortable", "Extremely Comfortable"]
                }
            ],
            "french": [
                {
                    "label": "À quel point êtes-vous à l'aise avec le logiciel de courtage en douane de notre entreprise ? Veuillez expliquer votre évaluation.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inconfortable, ..., 10-Très confortable",
                    "scale": ["Très inconfortable", "Inconfortable", "Assez inconfortable", "Peu inconfortable", "Neutre", "Peu confortable", "Assez confortable", "Confortable", "Très confortable", "Extrêmement confortable"]
                },
                {
                    "label": "Comment naviguez-vous efficacement les problèmes douaniers pour nos clients ? Veuillez partager un exemple récent.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très mal, ..., 10-Très bien",
                    "scale": ["Très mal", "Mal", "Assez mal", "Peu mal", "Neutre", "Peu bien", "Assez bien", "Bien", "Très bien", "Extrêmement bien"]
                },
                {
                    "label": "Comment restez-vous efficacement à jour avec les changements de tarifs et de réglementations douanières ? Veuillez expliquer vos stratégies.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                },
                {
                    "label": "À quel point êtes-vous efficace pour garantir la conformité avec les réglementations d'importation et d'exportation ? Pouvez-vous partager un exemple qui soutient votre évaluation ?",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficace, ..., 10-Très efficace",
                    "scale": ["Très inefficace", "Inefficace", "Assez inefficace", "Peu inefficace", "Neutre", "Peu efficace", "Assez efficace", "Efficace", "Très efficace", "Extrêmement efficace"]
                },
                {
                    "label": "Comment gérez-vous efficacement les situations où les marchandises sont retardées en douane ? Veuillez fournir un exemple récent.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                },
                {
                    "label": "Quelle est votre maîtrise de la coordination avec les agents des douanes ? Veuillez partager un exemple.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Pas du tout compétent, ..., 10-Très compétent",
                    "scale": ["Pas du tout compétent", "Très peu compétent", "Peu compétent", "Assez compétent", "Neutre", "Légèrement compétent", "Assez compétent", "Compétent", "Très compétent", "Extrêmement compétent"]
                },
                {
                    "label": "À quel point êtes-vous compétent pour préparer et soumettre les documents nécessaires à l'importation et à l'exportation ? Pouvez-vous décrire une instance qui soutient votre évaluation ?",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Pas du tout compétent, ..., 10-Très compétent",
                    "scale": ["Pas du tout compétent", "Très peu compétent", "Peu compétent", "Assez compétent", "Neutre", "Légèrement compétent", "Assez compétent", "Compétent", "Très compétent", "Extrêmement compétent"]
                },
                {
                    "label": "Comment pouvez-vous calculer et organiser efficacement le paiement des droits et taxes ? Veuillez fournir un exemple.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                },
                {
                    "label": "À quel point êtes-vous capable de gérer les restrictions d'importation et d'exportation ? Veuillez expliquer.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Pas du tout compétent, ..., 10-Très compétent",
                    "scale": ["Pas du tout compétent", "Très peu compétent", "Peu compétent", "Assez compétent", "Neutre", "Légèrement compétent", "Assez compétent", "Compétent", "Très compétent", "Extrêmement compétent"]
                },
                {
                    "label": "À quel point êtes-vous à l'aise pour conseiller les clients sur des questions liées au commerce, comme les exigences en matière d'assurance, les quotas, etc. ? Veuillez partager un exemple récent.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Pas du tout compétent, ..., 10-Très compétent",
                    "scale": ["Pas du tout compétent", "Très peu compétent", "Peu compétent", "Assez compétent", "Neutre", "Légèrement compétent", "Assez compétent", "Compétent", "Très compétent", "Extrêmement compétent"]
                }
            ]
        },
        "manager": {
            "english": [
                {
                    "label": "How effectively do you ensure your team stays updated with the latest customs regulations and tariff changes? Please explain your strategies.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                },
                {
                    "label": "How efficiently do you manage your team's workload related to customs brokerage activities? Please share an example that supports your rating.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Inefficiently, ..., 10-Very Efficiently",
                    "scale": ["Very Inefficiently", "Inefficiently", "Somewhat Inefficiently", "Slightly Inefficiently", "Neutral", "Slightly Efficiently", "Somewhat Efficiently", "Efficiently", "Very Efficiently", "Extremely Efficiently"]
                },
                {
                    "label": "How effectively do you handle conflicts or issues that arise within the team? Can you share a recent instance?",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                },
                {
                    "label": "How successfully do you delegate tasks and responsibilities among team members to ensure timely and efficient customs brokerage? Please explain your approach.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Not Successful at All, ..., 10-Very Successful",
                    "scale": ["Not Successful at All", "Very Little Success", "Little Success", "Some Success", "Neutral", "Slightly Successful", "Somewhat Successful", "Successful", "Very Successful", "Extremely Successful"]
                },
                {
                    "label": "How effective is your communication with your team members, especially in situations where immediate action is required (for example, goods being held at customs)? Please share an example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffective, ..., 10-Very Effective",
                    "scale": ["Very Ineffective", "Ineffective", "Somewhat Ineffective", "Slightly Ineffective", "Neutral", "Slightly Effective", "Somewhat Effective", "Effective", "Very Effective", "Extremely Effective"]
                },
                {
                    "label": "How well do you coordinate with your team to solve customs-related problems? Please share a recent example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                },
                {
                    "label": "How well do you handle disputes or disagreements within your team? Please provide an example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                },
                {
                    "label": "How effective are your strategies for training new employees in customs brokerage? Please explain.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffective, ..., 10-Very Effective",
                    "scale": ["Very Ineffective", "Ineffective", "Somewhat Ineffective", "Slightly Ineffective", "Neutral", "Slightly Effective", "Somewhat Effective", "Effective", "Very Effective", "Extremely Effective"]
                },
                {
                    "label": "How do you evaluate and ensure the quality of work done by your team members? Please provide details.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                },
                {
                    "label": "How adeptly have you handled a situation where a team member made an error in documentation or customs procedure? Please describe the instance.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                },
                {
                    "label": "How effective are you in ensuring that your team meets deadlines, especially during peak times? Please explain your methods.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffective, ..., 10-Very Effective",
                    "scale": ["Very Ineffective", "Ineffective", "Somewhat Ineffective", "Slightly Ineffective", "Neutral", "Slightly Effective", "Somewhat Effective", "Effective", "Very Effective", "Extremely Effective"]
                },
                {
                    "label": "How successful have you been in encouraging professional growth within your team? Please provide an example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Not Successful at All, ..., 10-Very Successful",
                    "scale": ["Not Successful at All", "Very Little Success", "Little Success", "Some Success", "Neutral", "Slightly Successful", "Somewhat Successful", "Successful", "Very Successful", "Extremely Successful"]
                },
                {
                    "label": "How effective have your communication strategies been in disseminating important information to the team? Please share an example.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffective, ..., 10-Very Effective",
                    "scale": ["Very Ineffective", "Ineffective", "Somewhat Ineffective", "Slightly Ineffective", "Neutral", "Slightly Effective", "Somewhat Effective", "Effective", "Very Effective", "Extremely Effective"]
                },
                {
                    "label": "How well do you ensure the team adheres to all compliance requirements? Please explain your strategies.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Very Ineffectively, ..., 10-Very Effectively",
                    "scale": ["Very Ineffectively", "Ineffectively", "Somewhat Ineffectively", "Slightly Ineffectively", "Neutral", "Slightly Effectively", "Somewhat Effectively", "Effectively", "Very Effectively", "Extremely Effectively"]
                }
            ],
            "french": [
                {
                    "label": "Comment vous assurez-vous efficacement que votre équipe reste à jour avec les dernières réglementations douanières et modifications tarifaires ? Veuillez expliquer vos stratégies.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                },
                {
                    "label": "Comment gérez-vous efficacement la charge de travail de votre équipe liée aux activités de courtage en douane ? Veuillez partager un exemple qui soutient votre évaluation.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficace, ..., 10-Très efficace",
                    "scale": ["Très inefficace", "Inefficace", "Assez inefficace", "Peu inefficace", "Neutre", "Peu efficace", "Assez efficace", "Efficace", "Très efficace", "Extrêmement efficace"]
                },
                {
                    "label": "Comment gérez-vous efficacement les conflits ou problèmes qui surgissent au sein de l'équipe ? Pouvez-vous partager un exemple récent ?",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                },
                {
                    "label": "Comment déléguez-vous avec succès les tâches et responsabilités parmi les membres de l'équipe pour assurer un courtage en douane en temps et efficace ? Veuillez expliquer votre approche.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Pas du tout réussi, ..., 10-Très réussi",
                    "scale": ["Pas du tout réussi", "Très peu réussi", "Peu réussi", "Assez réussi", "Neutre", "Légèrement réussi", "Assez réussi", "Réussi", "Très réussi", "Extrêmement réussi"]
                },
                {
                    "label": "Quelle est l'efficacité de votre communication avec les membres de votre équipe, surtout dans les situations où une action immédiate est requise (par exemple, des marchandises retenues en douane) ? Veuillez partager un exemple.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficace, ..., 10-Très efficace",
                    "scale": ["Très inefficace", "Inefficace", "Assez inefficace", "Peu inefficace", "Neutre", "Peu efficace", "Assez efficace", "Efficace", "Très efficace", "Extrêmement efficace"]
                },
                {
                    "label": "Comment coordonnez-vous bien avec votre équipe pour résoudre les problèmes douaniers ? Veuillez partager un exemple récent.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                },
                {
                    "label": "Comment gérez-vous bien les disputes ou désaccords au sein de votre équipe ? Veuillez fournir un exemple.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                },
                {
                    "label": "Comment sont efficaces vos stratégies pour former les nouveaux employés en courtage en douane ? Veuillez expliquer.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficace, ..., 10-Très efficace",
                    "scale": ["Très inefficace", "Inefficace", "Assez inefficace", "Peu inefficace", "Neutre", "Peu efficace", "Assez efficace", "Efficace", "Très efficace", "Extrêmement efficace"]
                },
                {
                    "label": "Comment évaluez-vous et assurez-vous la qualité du travail effectué par les membres de votre équipe ? Veuillez fournir des détails.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficace, ..., 10-Très efficace",
                    "scale": ["Très inefficace", "Inefficace", "Assez inefficace", "Peu inefficace", "Neutre", "Peu efficace", "Assez efficace", "Efficace", "Très efficace", "Extrêmement efficace"]
                },
                {
                    "label": "Comment avez-vous habilement géré une situation où un membre de l'équipe a commis une erreur dans la documentation ou la procédure douanière ? Veuillez décrire l'instance.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                },
                {
                    "label": "Comment êtes-vous efficace pour assurer que votre équipe respecte les délais, surtout pendant les périodes de pointe ? Veuillez expliquer vos méthodes.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficace, ..., 10-Très efficace",
                    "scale": ["Très inefficace", "Inefficace", "Assez inefficace", "Peu inefficace", "Neutre", "Peu efficace", "Assez efficace", "Efficace", "Très efficace", "Extrêmement efficace"]
                },
                {
                    "label": "Combien avez-vous réussi à encourager la croissance professionnelle au sein de votre équipe ? Veuillez fournir un exemple.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Pas du tout réussi, ..., 10-Très réussi",
                    "scale": ["Pas du tout réussi", "Très peu réussi", "Peu réussi", "Assez réussi", "Neutre", "Légèrement réussi", "Assez réussi", "Réussi", "Très réussi", "Extrêmement réussi"]
                },
                {
                    "label": "Combien vos stratégies de communication ont-elles été efficaces pour diffuser des informations importantes à l'équipe ? Veuillez partager un exemple.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficace, ..., 10-Très efficace",
                    "scale": ["Très inefficace", "Inefficace", "Assez inefficace", "Peu inefficace", "Neutre", "Peu efficace", "Assez efficace", "Efficace", "Très efficace", "Extrêmement efficace"]
                },
                {
                    "label": "Comment assurez-vous que l'équipe respecte toutes les exigences de conformité ? Veuillez expliquer vos stratégies.",
                    "range": true,
                    "comment": true,
                    "scaleDescription": "0-Très inefficacement, ..., 10-Très efficacement",
                    "scale": ["Très inefficacement", "Inefficacement", "Assez inefficacement", "Peu inefficacement", "Neutre", "Peu efficacement", "Assez efficacement", "Efficacement", "Très efficacement", "Extrêmement efficacement"]
                }
            ]
        }
    };

    const QuizEmployee = new Stepper(
        '#quizEmployee',
        {
            class: {
                controls: 'card card-body my-2',
                steps: 'card card-body my-2',
                pagination: 'card card-body my-2',
            },
        },
        function(stepper){
            for(const [key, value] of Object.entries(records.employee.english)){
                stepper.add(
                    function(step){

                        // Create Question
                        step.content.question = $(document.createElement('h3')).html(value.label).appendTo(step.content);
                        step.content.range = $(document.createElement('div')).addClass('form-group').appendTo(step.content);
                        step.content.range.label = $(document.createElement('label')).addClass('form-label').html(value.scaleDescription).appendTo(step.content.range);
                        step.content.range.tooltip = $(document.createElement('div')).addClass('tooltip-range').appendTo(step.content.range);
                        step.content.range.tooltip.range = $(document.createElement('input')).attr({
                            'name': 'question'+key,
                            'type': 'range',
                            'class': 'form-range',
                            'id': 'question' + key,
                            'step': '1',
                            'value': '0',
                            'min': '0',
                            'max': value.scale.length,
                        }).appendTo(step.content.range.tooltip);
                        step.content.range.tooltip.output = $(document.createElement('output')).attr({
                            'for': 'question'+key,
                            'class': ''
                        }).html(value.scale[0]).appendTo(step.content.range.tooltip);
                        step.content.comment = $(document.createElement('div')).addClass('form-group').appendTo(step.content);
                        step.content.comment.label = $(document.createElement('label')).attr({
                            'for': 'comment'+key
                        }).html('Comments:').appendTo(step.content.comment);
                        step.content.comment.textarea = $(document.createElement('textarea')).addClass('form-control').attr({
                            'id': 'comment'+key,
                            'name': 'comment'+key,
                            'rows': '3'
                        }).appendTo(step.content.comment);

                        // Add Event Listeners
                        step.content.range.tooltip.range.get(0).addEventListener('input', function(e){
                            $(this).next().html(value.scale[e.target.value]);
                        });
                    },
                );
            }
        },
    );
});