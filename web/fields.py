import flask_wtf
from widgets import * #http://wtforms.readthedocs.org/en/latest/fields.html

class CubeField(CheckboxButtonField):
    col_md = 2
    col_sm = 4
    col_xs = 12

class Form(flask_wtf.Form):
    match_id = IntegerField('Match ID', buttons=False)
    team_id = IntegerField('Team ID', buttons=False)

    #Breaching checkboxes Teleop
   	

    #Breaching checkboxes Auton
    cross_line = CubeField('Cross line')
    ci_switch = CubeField('Cube in Switch')
    ci_scale = CubeField('Cube in Scale')

    #Other
    autoncube_count = IntegerField('Number of cubes picked up', default=0,
        col_md=6,
        label_col_md=6,
        col_sm=8,
        label_col_sm=12)

    cube_count = IntegerField('Number of cubes picked up', default=0,
        col_md=6,
        label_col_md=6,
        col_sm=8,
        label_col_sm=12) 
    cube_switch = IntegerField('Cubes in Switch', default=0, col_sm=6)
    cube_scale = IntegerField('Cubes in Scale', default=0, col_sm=6)
    cube_vault = IntegerField('Cubes in Vault', default=0, col_sm=6)
    fouls = IntegerField('Fouls', default=0, col_sm=6)
    tech_fouls = IntegerField('Tech Fouls', default=0, col_sm=6)

    endgame_action = RadioField('What were they doing during endgame?', choices=[('0', 'Climbing'), ('1', 'Parking'), ('2', 'Neither')], default="2")

    helping_robot = CheckboxButtonField('Robot Helped Another Robot', col_md=3)
    comments = TextAreaField('', col_lg=12)
