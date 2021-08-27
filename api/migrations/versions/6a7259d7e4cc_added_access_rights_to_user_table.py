"""added access rights to user table

Revision ID: 6a7259d7e4cc
Revises: bb0d657cb163
Create Date: 2021-08-26 18:20:44.315572

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6a7259d7e4cc'
down_revision = 'bb0d657cb163'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('jhc_users', sa.Column('is_admin', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('jhc_users', 'is_admin')
    # ### end Alembic commands ###
