"""added numofpics to Posting model

Revision ID: bb0d657cb163
Revises: fec6e31edeb0
Create Date: 2021-08-26 11:01:17.289411

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bb0d657cb163'
down_revision = 'fec6e31edeb0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('re_postings', sa.Column('numOfPics', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('re_postings', 'numOfPics')
    # ### end Alembic commands ###
